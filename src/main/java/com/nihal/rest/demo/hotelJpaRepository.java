package com.nihal.rest.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface hotelJpaRepository extends JpaRepository<Hotel, String> {

}
