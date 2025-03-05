package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.dto.response.CartItemResponse;
import com.app.ecommerce_management_api.exception.ResourceNotFoundException;
import com.app.ecommerce_management_api.model.CartItem;
import com.app.ecommerce_management_api.repository.CartItemRepository;
import com.app.ecommerce_management_api.service.CartItemService;
import com.app.ecommerce_management_api.util.ConversionUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
//comment
@Service
public class CartItemServiceImpl implements CartItemService {

  private final CartItemRepository cartItemRepository;
  private final ConversionUtil convert;

  public CartItemServiceImpl(CartItemRepository cartItemRepository, ConversionUtil convert) {
    this.cartItemRepository = cartItemRepository;
    this.convert = convert;
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
  public CartItemResponse findById(Long id) {
    CartItem cartItem = cartItemRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Cart item with id " + id + " not found"));
    return convert.convertToDto(cartItem, CartItemResponse.class);
  }

  @Override
  @Transactional
  public void deleteById(Long id) {
    if (!cartItemRepository.existsById(id)) {
      throw new ResourceNotFoundException("Cart item with id " + id + " not found");
    }
    cartItemRepository.deleteById(id);
  }


  public List<CartItemResponse> getCartItemsByCartId(Long cartId) {
    List<CartItem> cartItems = cartItemRepository.findByCartId(cartId);
    if (cartItems.isEmpty()) {
      throw new ResourceNotFoundException("Cart with id " + cartId + " not found");
    }
    return convert.convertToDtoList(cartItems, CartItemResponse.class);
  }
}
