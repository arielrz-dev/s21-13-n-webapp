package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.response.CartItemResponse;
import com.app.ecommerce_management_api.model.CartItem;
import com.app.ecommerce_management_api.service.CartItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cartItem")
public class CartItemController {

  private final CartItemService cartItemService;
  public CartItemController(CartItemService cartItemService) {
    this.cartItemService = cartItemService;
  }

  @PostMapping("/create")
  public ResponseEntity<?> createCartItem(@RequestBody CartItem cartItem) {
    cartItemService.save(cartItem);
    return ResponseEntity.ok("Cart item created successfully");
  }

  @GetMapping("/{id}")
  public ResponseEntity<CartItemResponse> getCartItem(@PathVariable Long id) {
    CartItemResponse cartItemResponse = cartItemService.findById(id);
    return ResponseEntity.ok(cartItemResponse);
  }

  @PutMapping("/update")
  public ResponseEntity<?> updateCartItem(@RequestBody CartItem cartItem) {
    cartItemService.save(cartItem);
    return ResponseEntity.ok("Cart item updated successfully");
  }

  @DeleteMapping("/item/{id}")
  public ResponseEntity<Void> deleteCartItemById(@PathVariable Long id) {
    cartItemService.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/cart/{cartId}")
  public ResponseEntity<List<CartItemResponse>> getCartItemsByCart(@PathVariable Long cartId) {
    List<CartItemResponse> cartItemResponses = cartItemService.getCartItemsByCartId(cartId);
    return ResponseEntity.ok(cartItemResponses);
  }

}
