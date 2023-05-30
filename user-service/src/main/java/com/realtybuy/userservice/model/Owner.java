package com.realtybuy.userservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
public class Owner extends User{
}
