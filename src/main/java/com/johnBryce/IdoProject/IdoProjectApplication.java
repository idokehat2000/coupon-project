package com.johnBryce.IdoProject;

import java.sql.Date;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.NoSuchElementException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.johnBryce.IdoProject.Beans.Category;
import com.johnBryce.IdoProject.Beans.Company;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Beans.Customer;
import com.johnBryce.IdoProject.Errors.CompanyAlreadyExists;
import com.johnBryce.IdoProject.Facade.AdminFacade;
import com.johnBryce.IdoProject.Facade.CompanyFacade;
import com.johnBryce.IdoProject.Facade.CustomerFacade;
import com.johnBryce.IdoProject.Login.ClientType;
import com.johnBryce.IdoProject.Login.LoginException;
import com.johnBryce.IdoProject.Login.LoginManager;
import com.johnBryce.IdoProject.Thread.Job;

//import login.ClientType;

@SpringBootApplication
public class IdoProjectApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext ctx = SpringApplication.run(IdoProjectApplication.class, args);
	LoginManager login = ctx.getBean(LoginManager.class);
	
	
	Job dailyJob = ctx.getBean(Job.class);
	
	dailyJob.start();
	
	
	
//Admin Methods:
	
	try {
	
	//Admin Login
		
	AdminFacade admf = (AdminFacade) login.Login("admin@admin.com", "admin", ClientType.Administrator);
	
	//Add Company

		//try {
		//	admf.addCompany(new Company("IBM", "IBM@.com", "23373"));
		//} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//} catch (CompanyAlreadyExists e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//}
		
	//Add Customer
		
	 // try {
	//	admf.addCustomer(new Customer("roeie", "furman", "roeii@.com", "08542"));
	//} catch (NoSuchElementException e) {
		// TODO Auto-generated catch block
	//	e.printStackTrace();
	//} catch (addCustomerException e) {
		// TODO Auto-generated catch block
	//	e.printStackTrace();
	//}
		
	  	
	//Update Company
	
    // Company comp1 = admf.getOneCompany(10);
	// comp1.setPassword("11111");
	// admf.updateCompany(comp1);
	
	// Update Customer
	
	// Customer cust1 = admf.getOneCustomer(1);
	// cust1.setPassword("2000");
	// admf.updateCustomer(cust1);
	
	
	//Delete Company
		
		//try {
			//admf.deleteCompany(7);
		//} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//} catch (deleteCompanyException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
	//	}
		
	//Delete Customer
		
		//try {
		//	admf.deleteCustomer(6);
		//} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//} catch (deleteCustomerException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//}
		
	//Get All Companies
		
		//for (Company companies : admf.getAllCompanies()) {
		//	System.out.println(companies);
		//}
		
		
	//Get All Customers
		
		//for (Customer customers : admf.getAllCustomers()) {
		//	System.out.println(customers);
		//}
		
	//Get One Company
		
		//System.out.println(admf.getOneCompany(7));
		
	//Get One Customer
		
		//System.out.println(admf.getOneCustomer(6));
		
	
	
	
//Company Methods:
	
		
	//Company Login
		
		CompanyFacade comf = (CompanyFacade) login.Login("apple@.com", "123", ClientType.Company);
	
	//Add Coupon 
		
//	    Calendar startDate = Calendar.getInstance();
//	    startDate.set(2019, 10, 20);
//	    System.out.println(startDate.getTime());
//	   Calendar endDate = Calendar.getInstance();
//	    endDate.set(2020, 5, 5);
//	    System.out.println(endDate.getTime());
//	    Coupon c1 =  new Coupon(comf.getCompanyDetails(), "appleCoup2", Category.Vacation, "description", "image", new Date(startDate.getTimeInMillis()), new Date(endDate.getTimeInMillis()), 4, 40);
//	  System.out.println(c1.getId());
//	  System.out.println(c1);
//	    comf.addCoupon(c1);
	
	    
	//Update Coupon
		
		// Coupon coup1 = comf.getOneCoupon(23);
		// coup1.setPrice(900);
		// comf.updateCoupon(coup1);
		
		
	//Delete Coupon
		
		// comf.deleteCoupon(54);
		
		
	//Get All Coupons
		
		//System.out.println(comf.getAllCoupons());
	
	//Get One Coupon
		
		// System.out.println(comf.getOneCoupon(37));
	    
    //Get All Coupons By Category
		
		// for (Coupon couponsByCatgory : comf.getCouponsByCatgory(Category.Food)) {
		//	System.out.println(couponsByCatgory);
		// }
	    
    //Get Coupons By Max Price
		
		// for (Coupon couponsByMaxPrice : comf.getCouponsByMaxPrice(300)) {
		//	System.out.println(couponsByMaxPrice);
		// }
		
	//Get Company Details
		
		// System.out.println(comf.getCompanyDetails());
		
		
	    
		
// Customer Methods:
	    
   // Customer Login
	    
	 CustomerFacade custf = (CustomerFacade) login.Login("idok@.com", "2000", ClientType.Customer);
	 
  //Customer Purchase Coupon
	 
//	  Coupon c1 = custf.getAllCouponsInTotal().get(3);
//	    
//	  System.out.println(c1);
//	    
//	  custf.purchaseCoupon(c1);
	    
    //Get all coupons in total
	 
	  // for (Coupon coupons : custf.getAllCouponsInTotal()) {
	 //	System.out.println(coupons);
	// }
	 
  //Get All customer Coupons
	    
	 // System.out.println(custf.getAllCoupons());
	   
  //Get All Coupons By Category
	
	  //  for (Coupon couponsByCategory : custf.getAllCouponsByCatgory(Category.Food)) {
	  // 	System.out.println(couponsByCategory);
	  //  }
	    
  //Get Coupons By Max Price
	
	  // for (Coupon couponsByMaxPrice : custf.getCouponsByMaxPrice(400)) {
	  // System.out.println(couponsByMaxPrice);
	  // }
	    
  //Get Customer Details
	
	   // System.out.println(custf.getCustomerDetails());
	
	
	
	 dailyJob.stopRun();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} catch (Exception e) {
		System.out.println("** ERROR: "+e.getMessage());
	} 
	
		
	}

}
