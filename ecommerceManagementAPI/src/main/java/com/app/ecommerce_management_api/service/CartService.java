package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.Cart;

public interface CartService {
  void save(Cart cart);

  Cart findById(Long cartId);
}
