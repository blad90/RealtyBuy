package com.realtybuy.propertyservice.repository;

import com.realtybuy.propertyservice.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface PropertyRepository extends MongoRepository<Property, String> {
}
