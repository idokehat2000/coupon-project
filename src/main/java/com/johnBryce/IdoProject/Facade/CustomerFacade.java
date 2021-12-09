package com.johnBryce.IdoProject.Facade;


import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.johnBryce.IdoProject.Beans.Category;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Beans.Customer;
import com.johnBryce.IdoProject.Errors.YouOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.couponDateExpired;
import com.johnBryce.IdoProject.Errors.couponDoesntExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;
import com.johnBryce.IdoProject.Errors.noCouponsAtPriceRange;
import com.johnBryce.IdoProject.Errors.noCouponsByCatgory;
import com.johnBryce.IdoProject.Errors.noCouponsLeft;
import com.johnBryce.IdoProject.Errors.youDontHaveAnyCoupons;

@Service
public class CustomerFacade extends ClientFacade {

	Customer customer;
	int customerId;
	
	@Override
	public boolean login(String email, String password) throws SQLException {
		if(custRepo.existsCustomerByEmailAndPassword(email, password)) {
			
			customer = custRepo.findByEmail(email);
			customerId = custRepo.findByEmail(email).getId();
			return true;
		}
		System.out.println("failed to login");
		return false;
		
}

	//checking valid id, checking customer does not own coupon already, checking coupon amount is above 0, checking coupon date is not expired 
	
	public void purchaseCoupon(Coupon coup) throws NoSuchElementException, YouOwnThisCoupon, noCouponsLeft, couponDateExpired, couponDoesntExists {
		
		//Set<Coupon> customerCoupons = customer.getCoupons();
		Customer customer = custRepo.findById(customerId).get();
		
		if(!coupRepo.existsById(coup.getId())) {
			throw new couponDoesntExists();
		}
		
		
		
		for (Coupon coupons : customer.getCoupons()) {
			
			if(coupons.getId() == coup.getId() ) {
			throw new YouOwnThisCoupon();
			}
		}
		
		
		if(coup.getAmount() <= 0) {
			throw new noCouponsLeft();
		}
	
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MILLISECOND, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.HOUR, 0);
	    
		if(coup.getEndDate().before(cal.getTime())) {
			throw new couponDateExpired();
		}
	
		customer.getCoupons().add(coup);
	    coup.setAmount(coup.getAmount()-1);
	    custRepo.save(customer);
	    coup.getCustomers().add(customer);
	    coupRepo.save(coup);
	    
	    
	    System.out.println("coupon successfully purchased !");
	}

	//return customer coupons
	
	public Set<Coupon> getAllCoupons() throws NoSuchElementException, customerDoesntExists, youDontHaveAnyCoupons{
		
		HashSet<Coupon> coupons2 = new HashSet<Coupon>();
		
		for (Coupon coupons1 : getCustomerDetails().getCoupons()) {
			coupons2.add(coupons1);
		}
		
		return coupons2;
	}
	
	//adding to arry all coupons by same category, if arry size is 0 throw exception, return arry
	
	public List<Coupon> getAllCouponsByCatgory(Category category) throws NoSuchElementException, noCouponsByCatgory, customerDoesntExists{
		ArrayList<Coupon> coupons2 = new ArrayList<Coupon>();
		
	   for (Coupon coupons1 : getCustomerDetails().getCoupons()) {
		   if(coupons1.getCategory().equals(category)) {
			   coupons2.add(coupons1);
		   }
	}
	    if(coupons2.size() == 0){
	    	throw new noCouponsByCatgory();
	    }
	   
	   return coupons2; 
	}
	
	//adding to arry all coupons below max price, if arry size is 0 throw exception, return arry
	
	public List<Coupon> getCouponsByMaxPrice(int maxPrice) throws NoSuchElementException, noCouponsAtPriceRange, customerDoesntExists{
		ArrayList<Coupon> coupons2 = new ArrayList<Coupon>();
	
		for (Coupon coupon1 : getCustomerDetails().getCoupons()) {
			if(coupon1.getPrice() <= maxPrice) {
				coupons2.add(coupon1);
			}
		}
	
		if(coupons2.size() == 0) {
			throw new noCouponsAtPriceRange();
		}
		
		
		return coupons2;
	
	}
	
	public Customer getCustomerDetails() throws NoSuchElementException, customerDoesntExists {
		return custRepo.findById(customerId).orElseThrow(customerDoesntExists::new);
	}
	
	public List<Coupon> getAllCouponsInTotal() {
		return coupRepo.findAll();
	}
	
}
