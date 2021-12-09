package com.johnBryce.IdoProject.Facade;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;

import com.johnBryce.IdoProject.Repository.CompanyRepository;
import com.johnBryce.IdoProject.Repository.CouponRepository;
import com.johnBryce.IdoProject.Repository.CustomerRepository;



public abstract class ClientFacade {
  
    @Autowired
	protected CompanyRepository compRepo ;
	@Autowired
	protected CustomerRepository custRepo;
	@Autowired
	protected CouponRepository coupRepo;
	
	public abstract boolean login(String email, String password) throws SQLException;
}
