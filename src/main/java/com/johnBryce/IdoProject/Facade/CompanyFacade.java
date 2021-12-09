package com.johnBryce.IdoProject.Facade;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;


import org.springframework.stereotype.Service;

import com.johnBryce.IdoProject.Beans.Category;
import com.johnBryce.IdoProject.Beans.Company;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Errors.YouDontOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.couponAlreadyExists;
import com.johnBryce.IdoProject.Errors.couponDoesntExists;
import com.johnBryce.IdoProject.Errors.noCouponsAtPriceRange;
import com.johnBryce.IdoProject.Errors.noCouponsByCatgory;
import com.johnBryce.IdoProject.Errors.youDontHaveAnyCoupons;
@Service
public class CompanyFacade extends ClientFacade {
  
	int companyId;
	Company company;
	
	@Override
	public boolean login(String email, String password) throws SQLException {
		if(compRepo.existsCompanyByEmailAndPassword(email, password)) {
		
		companyId = compRepo.findByEmail(email).getId();	
		company = compRepo.findByEmail(email);
		return true;
			
		}
		System.out.println("failed to login");
		return false;
	}
  
	// checking title does not exist before adding
	
	public void addCoupon(Coupon coup) throws NoSuchElementException, couponAlreadyExists {
		for (Coupon coupons : company.getCoupons()) {
			if(coupons.getTitle().equals(coup.getTitle())) {
				throw new couponAlreadyExists();
			}
		}
		coupRepo.save(coup);
		System.out.println("coupon added successfully !");
	}
	
	//checking valid id before updating
	
	public void updateCoupon(Coupon coup) throws NoSuchElementException, couponDoesntExists {
		if(!coupRepo.existsById(coup.getId())) {
			throw new couponDoesntExists();
		}
		coupRepo.save(coup);
		System.out.println("coupon updated successfully !");
	} 
  
	//checking valid id before deleting, checking coupon belong to company
	
	public void deleteCoupon(int id) throws NoSuchElementException, couponDoesntExists, YouDontOwnThisCoupon{
		if(!coupRepo.existsById(id)) {
			throw new couponDoesntExists();
		
		}
		
		boolean check = true;
		
		for (Coupon coupon : company.getCoupons()) {
			if(coupon.getId() == id) {
				check = false;
				coupRepo.deleteById(id);
				
			}
		}
		
		if(check == true) {
			throw new YouDontOwnThisCoupon();
		}
			
		
		
		System.out.println("coupon deleted successfully !");
		
		
	}
	
	//checking valid id, checking coupon belong to company
	
	public Coupon getOneCoupon(int id) throws NoSuchElementException, couponDoesntExists, YouDontOwnThisCoupon{
		if(!coupRepo.existsById(id)) {
			throw new couponDoesntExists();
		}
		
		boolean check = false;
		for (Coupon coupon : company.getCoupons()) {
			if(coupon.getId() == id) {
				check = false;
				return coupon;
			} else {
				check = true;
			}
		}
		if(check == true) {
			throw new YouDontOwnThisCoupon();
		}
		
		
		
		return null;
		
	}
	
	
    //return company coupons
	
	public List<Coupon> getAllCoupons() throws NoSuchElementException, youDontHaveAnyCoupons  {
		ArrayList<Coupon> coupons2 = new ArrayList<Coupon>();
		for (Coupon coupon : coupRepo.findAll()) {
			if(coupon.getCompany().equals(company))
				coupons2.add(coupon);
		}
		
		
		return coupons2;
	
	}

	//adding to arry all coupons by same category, if arry size is 0 throw exception, return arry
	
	public List<Coupon> getCouponsByCatgory(Category category) throws NoSuchElementException, noCouponsByCatgory {
    ArrayList<Coupon>coupons1 = new ArrayList<Coupon>();
	for (Coupon coupon : company.getCoupons()) {
		if(coupon.getCategory().equals(category)) {
			coupons1.add(coupon);
		}
	}
		if(coupons1.size() == 0) {
			throw new noCouponsByCatgory();
		}
	
	return coupons1;
	

	}

	//adding to arry all coupons below max price, if arry size is 0 throw exception, return arry
	
	public List<Coupon> getCouponsByMaxPrice(int maxPrice) throws NoSuchElementException, noCouponsAtPriceRange{
		ArrayList<Coupon> couponsBelowMax = new ArrayList<Coupon>();
		for (Coupon coupons : company.getCoupons()) {
			if(coupons.getPrice()<=maxPrice) {
				couponsBelowMax.add(coupons);
				}
			
		}
	     if(couponsBelowMax.size()==0) {
	    	 throw new noCouponsAtPriceRange();
	     }
		
		
		return couponsBelowMax;
	   
	}
	
	public Company getCompanyDetails() throws companyDoesntExists {
		return compRepo.findById(companyId).orElseThrow(companyDoesntExists::new);
	}

}
