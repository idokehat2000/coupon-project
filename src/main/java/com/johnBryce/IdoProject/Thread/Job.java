package com.johnBryce.IdoProject.Thread;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Repository.CompanyRepository;
import com.johnBryce.IdoProject.Repository.CouponRepository;
import com.johnBryce.IdoProject.Repository.CustomerRepository;

@Component
public class Job extends Thread {

	
	@Autowired
	protected CompanyRepository compRepo;
	
	@Autowired
	protected CustomerRepository custRepo;
	
	@Autowired
	protected CouponRepository coupRepo;
	
	private boolean quit = false;
	
	Calendar cal = Calendar.getInstance();
	
	@Override
	public void run() {
		
		while(!quit) {
		try {
			
			cal.set(Calendar.MILLISECOND, 0);
			cal.set(Calendar.SECOND, 0);
			cal.set(Calendar.MINUTE, 0);
			cal.set(Calendar.HOUR, 0);
		
			for (Coupon coupons : coupRepo.findAll()) {
				if(coupons.getEndDate().before(cal.getTime())) {
					coupRepo.deleteById(coupons.getId());
				}
			}
		     
			Thread.sleep(60 * 1000);
		
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
			
			
			
			
			
			
			
		}
		
		
		
		
		
		
		
	}
	public void stopRun() {
		quit = true;
		//interrupt();
		System.out.println("daily job finished !");
	}
	
	
}
