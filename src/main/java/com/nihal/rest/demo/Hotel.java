package com.nihal.rest.demo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Hotel {

	@Id
	private String Name;
	private int StarRating;
	private String Facilities;
	private String Region;
	private long Price;
	
	public Hotel()
	{}
	public Hotel(String name, int starRating, String facilities, String region, long price) {
		super();
		Name = name;
		StarRating = starRating;
		Facilities = facilities;
		Region = region;
		Price = price;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getStarRating() {
		return StarRating;
	}
	public void setStarRating(int starRating) {
		StarRating = starRating;
	}
	public String getFacilities() {
		return Facilities;
	}
	public void setFacilities(String facilities) {
		Facilities = facilities;
	}
	public String getRegion() {
		return Region;
	}
	public void setRegion(String region) {
		Region = region;
	}
	public long getPrice() {
		return Price;
	}
	public void setPrice(long price) {
		Price = price;
	}
	
	
	
	
	
	
	
	
	
	
}
