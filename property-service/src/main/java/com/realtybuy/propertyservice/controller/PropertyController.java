package com.realtybuy.propertyservice.controller;

import com.realtybuy.propertyservice.dto.PropertyRequest;
import com.realtybuy.propertyservice.dto.PropertyResponse;
import com.realtybuy.propertyservice.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/property")
@RequiredArgsConstructor
@CrossOrigin
public class PropertyController {

    private final PropertyService propertyService;

    @PostMapping("add")
    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void createProperty(@RequestBody PropertyRequest propertyRequest){
        propertyService.createProperty(propertyRequest);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PropertyResponse> getAllProperties(){
        return propertyService.getAllProperties();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public PropertyResponse getProperty(@PathVariable String id){
        return propertyService.getProperty(id);
    }
}
