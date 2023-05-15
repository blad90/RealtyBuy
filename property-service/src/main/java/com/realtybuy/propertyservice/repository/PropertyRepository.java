package com.realtybuy.propertyservice.repository;

import com.realtybuy.propertyservice.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PropertyRepository extends MongoRepository<Property, String> {
}
