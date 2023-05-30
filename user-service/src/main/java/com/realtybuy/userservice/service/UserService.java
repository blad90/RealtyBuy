package com.realtybuy.userservice.service;

import com.realtybuy.userservice.dto.UserRequest;
import com.realtybuy.userservice.dto.UserResponse;
import com.realtybuy.userservice.model.User;
import com.realtybuy.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;

    public void createUser(UserRequest userRequest){
        User user = User.builder()
                .name(userRequest.getName())
                .address(userRequest.getAddress())
                .phoneNumber(userRequest.getPhoneNumber())
                .email(userRequest.getEmail())
                .username(userRequest.getUsername())
                .password(userRequest.getPassword())
                .build();

        userRepository.save(user);
        log.info("User {} is saved", user.getId());
    }

    public List<UserResponse> getAllUsers(){
        List<User> users = userRepository.findAll();
        return users.stream().map(this::mapToUserResponse).collect(Collectors.toList());
    }

    private UserResponse mapToUserResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .address(user.getAddress())
                .phoneNumber(user.getPhoneNumber())
                .email(user.getEmail())
                .username(user.getUsername())
                .password(user.getPassword())
                .build();
    }
}
