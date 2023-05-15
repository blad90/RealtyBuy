package com.realtybuy.propertyservice.service;

import com.realtybuy.propertyservice.dto.PropertyRequest;
import com.realtybuy.propertyservice.dto.PropertyResponse;
import com.realtybuy.propertyservice.model.Property;
import com.realtybuy.propertyservice.repository.PropertyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PropertyService {
    private final PropertyRepository propertyRepository;

    public void createProperty(PropertyRequest propertyRequest){
        Property property = Property.builder()
                .name(propertyRequest.getName())
                .description(propertyRequest.getDescription())
                .address(propertyRequest.getAddress())
                .squareFeet(propertyRequest.getSquareFeet())
                .price(propertyRequest.getPrice())
                .build();

        propertyRepository.save(property);
        log.info("Property {} is saved", property.getId());
    }

    public List<PropertyResponse> getAllProperties(){
        List<Property> properties = propertyRepository.findAll();
        return properties.stream().map(this::mapToPropertyResponse).collect(Collectors.toList());
    }

    private PropertyResponse mapToPropertyResponse(Property property){
        return PropertyResponse.builder()
                .id(property.getId())
                .name(property.getName())
                .description(property.getDescription())
                .address(property.getAddress())
                .squareFeet(property.getSquareFeet())
                .price(property.getPrice())
                .build();
    }
}
