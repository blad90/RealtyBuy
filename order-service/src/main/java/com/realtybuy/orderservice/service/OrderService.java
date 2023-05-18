package com.realtybuy.orderservice.service;

import com.realtybuy.orderservice.dto.OrderLineItemsDTO;
import com.realtybuy.orderservice.dto.OrderRequest;
import com.realtybuy.orderservice.dto.OrderResponse;
import com.realtybuy.orderservice.model.Order;
import com.realtybuy.orderservice.model.OrderLineItems;
import com.realtybuy.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    public void placeOrder(OrderRequest orderRequest){
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        List<OrderLineItems> orderLineItems= orderRequest.getOrderLineItemsDTOList()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());

        order.setOrderLineItemsList(orderLineItems);

        orderRepository.save(order);
    }

    private OrderLineItems mapToDTO(OrderLineItemsDTO orderLineItemsDTO) {
        OrderLineItems orderLineItems = new OrderLineItems();
        orderLineItems.setPropertyCode(orderLineItemsDTO.getPropertyCode());
        orderLineItems.setPrice(orderLineItemsDTO.getPrice());
        orderLineItems.setQuantity(orderLineItemsDTO.getQuantity());
        return orderLineItems;
    }

    public List<OrderResponse> getAllOrders() {
        List<Order> properties = orderRepository.findAll();
        return properties.stream().map(this::mapToOrderResponse).collect(Collectors.toList());
    }

    private OrderResponse mapToOrderResponse(Order order) {
        return OrderResponse.builder()
                .orderLineItems(order.getOrderLineItemsList())
                .build();
    }
}
