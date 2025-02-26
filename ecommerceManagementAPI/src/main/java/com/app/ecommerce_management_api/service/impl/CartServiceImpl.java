package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.Cart;
import com.app.ecommerce_management_api.repository.CartRepository;
import com.app.ecommerce_management_api.service.CartService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

  private final CartRepository cartRepository;

  public CartServiceImpl(CartRepository cartRepository) {
    this.cartRepository = cartRepository;
  }

  @Override
  public void save(Cart cart) {
    cartRepository.save(cart);
  }

  @Override
  public Cart findById(Long cartId) {
    return cartRepository.getReferenceById(cartId);
  }
}
