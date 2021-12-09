package com.johnBryce.IdoProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.johnBryce.IdoProject.Beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	boolean existsCustomerByEmailAndPassword(String email , String password);
	Customer findByEmail(String email);

}

