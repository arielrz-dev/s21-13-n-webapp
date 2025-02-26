package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.model.Cart;
import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.service.CartService;
import com.app.ecommerce_management_api.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {

  private final UserService userService;

  private final CartService cartService;

  public CartController(UserService userService, CartService cartService) {
    this.userService = userService;
    this.cartService = cartService;
  }


  @PostMapping("/create")
  public ResponseEntity<?> createCart(HttpServletRequest request) throws Exception {
    try {
      User user= userService.getUserFromToken(request);
      Cart cartUser= new Cart();
              cartUser.setUser(user);
              cartUser.setTotalAmount(BigDecimal.ZERO);

      cartService.save(cartUser);
      return ResponseEntity.ok("Cart created successfully");
    }
    catch (Exception e ){
      throw new Exception("error al crear el carrito",e);
    }
  }

//  @PutMapping("/updatePrice")
//  public ResponseEntity<?> updatePrice(@RequestParam Long cartId, @RequestParam BigDecimal newPrice) throws Exception {
//    try {
//      cartService.updatePrice(cartId,newPrice);
//      return ResponseEntity.ok("Cart ammount updated successfully");
//
//    }
//    catch (Exception e){
//      throw new Exception("Error al actualizar el precio",e);
//    }
//  }

  @PutMapping("/updatePrice")
  public ResponseEntity<?> updatePrice(@RequestParam Long cartId, @RequestParam BigDecimal newPrice) {
    try {
      cartService.updatePrice(cartId, newPrice);
      return ResponseEntity.ok("Cart amount updated successfully");
    } catch (ResponseStatusException e) {
      return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el precio");
    }
  }

}
