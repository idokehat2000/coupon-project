package com.johnBryce.IdoProject.Facade;

import java.sql.SQLException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.johnBryce.IdoProject.Beans.Company;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Beans.Customer;
import com.johnBryce.IdoProject.Errors.CompanyAlreadyExists;
import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.customerAlreadyExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;

@Service
public class AdminFacade extends ClientFacade {
	@Override
	public boolean login(String email, String password) throws SQLException {
		if(email.equals("admin@admin.com") && password.equals("admin")) {
			
			return true;
		}else {
			
			return false;
		}
	}
	

//Admin Company Methods:
	
//checking valid id and if email or name do not exist before adding

public void addCompany(Company comp) throws NoSuchElementException, CompanyAlreadyExists {
	if(compRepo.existsById(comp.getId()))
		throw new CompanyAlreadyExists();
		
		for (Company companies : compRepo.findAll()) {
		
		
		if (companies.getEmail().equals(comp.getEmail())||companies.getName().equals(comp.getName())) {
			throw new CompanyAlreadyExists();
		}
	}
	
	
	compRepo.save(comp);
	System.out.println("company added successfully !");
}

//checking for valid id before updating

public void updateCompany(Company comp) throws NoSuchElementException, companyDoesntExists  {
	if(compRepo.existsById(comp.getId())) {
	    
		compRepo.save(comp);
		System.out.println("company updated successfully !");
	}else {
		throw new companyDoesntExists();
	}
}

//checking for valid id, deleting customers coupons who belong to the company, deleting customers from the coupons that belongs to the company, deleting company coupons, deleting company

public void deleteCompany(int companyId) throws NoSuchElementException, companyDoesntExists {
	if(!compRepo.existsById(companyId)) {
		throw new companyDoesntExists();
	}
	Company temp = compRepo.findById(companyId).orElseThrow(NoSuchElementException::new);
	
	for (Customer customer : custRepo.findAll()) {
		customer.getCoupons().removeAll(temp.getCoupons());
		custRepo.save(customer);
	}
	
	for (Coupon coupon : temp.getCoupons()) {
		coupon.getCustomers().clear();
		coupRepo.save(coupon);
		coupon.setCompany(null);
		coupRepo.delete(coupon);
	}
	
	
	
	
	
	compRepo.deleteById(companyId);
	System.out.println("company deleted successfully !");
}

public List<Company> getAllCompanies() throws NoSuchElementException{
	
	return compRepo.findAll();
}
public Company getOneCompany(int id) throws NoSuchElementException, companyDoesntExists {
	return compRepo.findById(id).orElseThrow(companyDoesntExists::new);
}


//Admin Customer Methods:

//checking for valid id before adding, checking that the email does not exist

public void addCustomer(Customer cust) throws NoSuchElementException, customerAlreadyExists {
	if(custRepo.existsById(cust.getId())) {
		throw new customerAlreadyExists();
	}
	
	for (Customer Customers : custRepo.findAll()) {
		if(cust.getEmail().equals(Customers.getEmail())) {
	       throw new customerAlreadyExists();
		}
	}
	custRepo.save(cust);
	System.out.println("customer added successfully !");
}

// checking valid id before updating

public void updateCustomer(Customer cust) throws NoSuchElementException, customerDoesntExists {
	if(custRepo.existsById(cust.getId())) {
	
		custRepo.save(cust);
		System.out.println("customer updated successfully !");
	}else {
		throw new customerDoesntExists();
	}
}

//checking valid id, deleting customer coupons, deleting customer himself

public void deleteCustomer(int customerId) throws NoSuchElementException, customerDoesntExists  {
	if(!custRepo.existsById(customerId)) {
		throw new customerDoesntExists();
	}
	
	Customer customer = getOneCustomer(customerId);

	for (Coupon coup : coupRepo.findAll()) {
		coup.getCustomers().remove(customer);
		coupRepo.save(coup);
	}
	
	for (Coupon c : customer.getCoupons()) {
		coupRepo.delete(c);
	}
	
	//customer.getCoupons().clear();
	//custRepo.save(customer);
	custRepo.deleteById(customerId);
	System.out.println("customer deleted successfully !");
}

public List<Customer> getAllCustomers() throws NoSuchElementException{
	
	return custRepo.findAll();
}
public Customer getOneCustomer(int id) throws NoSuchElementException, customerDoesntExists {
	return custRepo.findById(id).orElseThrow(customerDoesntExists::new);
}






}
