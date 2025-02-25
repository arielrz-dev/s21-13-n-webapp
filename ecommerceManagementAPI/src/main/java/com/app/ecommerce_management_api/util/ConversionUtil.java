package com.app.ecommerce_management_api.util;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ConversionUtil {

  private final ModelMapper modelMapper;

  public ConversionUtil(ModelMapper modelMapper) {
    this.modelMapper = modelMapper;
  }

  public <D, T> D convertToDto(T entity, Class<D> dtoClass) {
    return modelMapper.map(entity, dtoClass);
  }

  public <D, T> T convertToEntity(D dto, Class<T> entityClass) {
    return modelMapper.map(dto, entityClass);
  }

  public <D, T> List<D> convertToDtoList(List<T> entityList, Class<D> dtoClass) {
    return entityList.stream()
            .map(entity -> convertToDto(entity, dtoClass))
            .toList();
  }

  public <D, T> List<T> convertToEntityList(List<D> dtoList, Class<T> entityClass) {
    return dtoList.stream()
            .map(dto -> convertToEntity(dto, entityClass))
            .toList();
  }
}
