package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.CartItem;

import java.util.List;

public interface CartItemService {
  void save(CartItem cartItem);
  CartItem findById(Long id);
  void deleteById(Long id);
  List<CartItem> findByCartId(Long cartId);
}
