package com.realtybuy.propertyservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PropertyResponse {
    private String id;
    private String name;
    private String description;
    private String address;
    private int squareFeet;
    private BigDecimal price;
    private boolean sold;
}
