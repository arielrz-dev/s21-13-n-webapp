package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.service.CloudinaryService;
import com.app.ecommerce_management_api.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/v1")
public class UserController {

  private final UserService userService;
  private final CloudinaryService cloudinaryService;

  public UserController(UserService userService, CloudinaryService cloudinaryService) {
    this.userService = userService;
    this.cloudinaryService = cloudinaryService;
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<String> getUser() {
    return ResponseEntity.ok("Hello, User!");
  }


  @GetMapping("/dashboard")
  public ResponseEntity<User> getUserDashboard(@AuthenticationPrincipal UserDetails userDetails) {
    String username = userDetails.getUsername();
    User userAuthenticatedInfo = userService.getUserInfoByUsername(username);

    return ResponseEntity.ok(userAuthenticatedInfo);
  }


  @Operation(
          summary = "Upload a profile image for a user",
          description = "Sube una imagen de perfil para un usuario y actualiza la URL de la imagen de perfil en la base de datos.",
          parameters = {
                  @Parameter(name = "userId", description = "ID del usuario para subir la imagen de perfil", required = true, example = "1"),
                  @Parameter(name = "file", description = "Archivo de imagen de perfil para subir", required = true, schema = @Schema(type = "string", format = "binary"))
          },
          responses = {
                  @ApiResponse(responseCode = "200", description = "Imagen de perfil subida exitosamente", content = @Content(
                          mediaType = "application/json",
                          schema = @Schema(implementation = Map.class)
                  )),
                  @ApiResponse(responseCode = "409", description = "Imagen duplicada detectada"),
                  @ApiResponse(responseCode = "404", description = "Usuario no encontrado")
          }
  )
  @PostMapping("/{userId}/profile-image")
  public CompletableFuture<ResponseEntity<Map>> uploadProfileImage(
          @PathVariable Long userId,
          @RequestParam("file") MultipartFile file) throws IOException {
    // Obtener la URL de la imagen actual del usuario
    String currentImageUrl = userService.getUserProfileImageUrl(userId);
    // Eliminar la imagen existente si hay una
    if (currentImageUrl != null && !currentImageUrl.isEmpty()) {
      cloudinaryService.deleteImageByUrl(currentImageUrl);
    }
    String publicId = userService.generatePublicIdProfile(userId);
    return cloudinaryService.uploadAsync(file, "profiles", publicId)
            .thenApply(result -> {
              if ("rejected".equals(result.get("moderation_status"))) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Duplicate image detected");
              }
              userService.updateUserProfileImage(userId, result.get("secure_url").toString());
              return ResponseEntity.ok(result);
            });
  }

}
