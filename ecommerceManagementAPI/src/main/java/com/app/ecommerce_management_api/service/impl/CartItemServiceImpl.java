package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.CartItem;
import com.app.ecommerce_management_api.repository.CartItemRepository;
import com.app.ecommerce_management_api.service.CartItemService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService {

  private final CartItemRepository cartItemRepository;

  public CartItemServiceImpl(CartItemRepository cartItemRepository) {
    this.cartItemRepository = cartItemRepository;
  }

  @Override
  @Transactional
  public void save(CartItem cartItem) {
    Long cartId = cartItem.getCart().getId();
    Long productId = cartItem.getProduct().getId();

    Optional<CartItem> existingCartItemOpt = cartItemRepository.findByCartIdAndProductId(cartId, productId);

    if (existingCartItemOpt.isPresent()) {
      CartItem existingCartItem = existingCartItemOpt.get();
      existingCartItem.setAmount(existingCartItem.getAmount() + cartItem.getAmount());
      cartItemRepository.save(existingCartItem);
    } else {
      cartItemRepository.save(cartItem);
    }
  }

  @Override
  public CartItem findById(Long id) {
    return cartItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Cart item not found"));
  }

  @Override
  @Transactional
  public void deleteById(Long id) {
    cartItemRepository.deleteById(id);
  }

  @Override
  public List<CartItem> findByCartId(Long cartId) {
    return cartItemRepository.findByCartId(cartId);
  }
}
