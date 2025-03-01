package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.model.CartItem;
import com.app.ecommerce_management_api.service.CartItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cartItems")
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
  public ResponseEntity<CartItem> getCartItem(@PathVariable Long id) {
    CartItem cartItem = cartItemService.findById(id);
    return ResponseEntity.ok(cartItem);
  }

  @PutMapping("/update")
  public ResponseEntity<?> updateCartItem(@RequestBody CartItem cartItem) {
    cartItemService.save(cartItem);
    return ResponseEntity.ok("Cart item updated successfully");
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<?> deleteCartItem(@PathVariable Long id) {
    cartItemService.deleteById(id);
    return ResponseEntity.ok("Cart item deleted successfully");
  }

  @GetMapping("/cart/{cartId}")
  public ResponseEntity<List<CartItem>> getCartItemsByCart(@PathVariable Long cartId) {
    List<CartItem> cartItems = cartItemService.findByCartId(cartId);
    return ResponseEntity.ok(cartItems);
  }
}
