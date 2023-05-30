package com.realtybuy.userservice.repository;

import com.realtybuy.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
}
