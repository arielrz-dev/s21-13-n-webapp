package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.dto.response.CartItemResponse;
import com.app.ecommerce_management_api.model.CartItem;

import java.util.List;

public interface CartItemService {
  void save(CartItem cartItem);
  CartItemResponse findById(Long id);
  void deleteById(Long id);
  List<CartItemResponse> getCartItemsByCartId(Long cartId);
}
