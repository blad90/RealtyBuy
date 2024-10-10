package com.realtybuy.propertyservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document("property")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Property {
    @Id
    private String id;
    private String name;
    private String description;
    private String address;
    private int squareFeet;
    private BigDecimal price;
    private boolean sold;

}
