package com.nihal.rest.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HotelResource {
	public HotelResource()
	{}
    
    @Autowired
	private hotelJpaRepository hoteljparep;
    
    @GetMapping("/users/hotels")
	public java.util.List<Hotel>getAllHotels()
	{
	return hoteljparep.findAll();
		
	}
}
