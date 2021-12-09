package com.johnBryce.IdoProject.Web;

import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.johnBryce.IdoProject.Beans.Category;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Errors.YouDontOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.YouOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.couponAlreadyExists;
import com.johnBryce.IdoProject.Errors.couponDateExpired;
import com.johnBryce.IdoProject.Errors.couponDoesntExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;
import com.johnBryce.IdoProject.Errors.noCouponsAtPriceRange;
import com.johnBryce.IdoProject.Errors.noCouponsByCatgory;
import com.johnBryce.IdoProject.Errors.noCouponsLeft;
import com.johnBryce.IdoProject.Errors.youDontHaveAnyCoupons;
import com.johnBryce.IdoProject.Facade.CompanyFacade;
import com.johnBryce.IdoProject.Facade.CustomerFacade;

@RestController
@RequestMapping("Customer")
@CrossOrigin("http://localhost:4200")

public class CustomerController {


	@Autowired
	Map<String, Session> sessionsMap;

	public CustomerController() {
	}

	private void isTimeOut(Session session, String token) {
		if (session != null) {
			long timeSession = session.getLastAccessed();
			long timeNow = System.currentTimeMillis();
			if ((timeNow - timeSession) > 1000 * 60 * 30) {
				sessionsMap.remove(token);
				session = null;
			}
		}
	}

	@PostMapping("/purchaseCoupon/{token}")
	public ResponseEntity<Object> purchaseCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CustomerFacade service = (CustomerFacade) session.getService();
			try {
				service.purchaseCoupon(coupon);
				return ResponseEntity.ok(coupon);
			} catch (couponDoesntExists | couponDateExpired | noCouponsLeft | YouOwnThisCoupon e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/getAllCoupons/{token}")
	public ResponseEntity<Object> getAllCoupons(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CustomerFacade service = (CustomerFacade) session.getService();
			try {
			
				return ResponseEntity.ok(service.getAllCoupons());
			} catch (youDontHaveAnyCoupons | customerDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	

	
	@GetMapping("/getCouponsByCategory/{token}/{category}")
	public ResponseEntity<Object> getCouponsByCategory(@PathVariable String token, @PathVariable Category category) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getAllCouponsByCatgory(category));
			
		}catch (noCouponsByCatgory | customerDoesntExists e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getCouponsByMaxPrice/{token}/{maxPrice}")
	public ResponseEntity<Object> getCouponsByMaxPrice(@PathVariable String token, @PathVariable int maxPrice) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getCouponsByMaxPrice(maxPrice));
			
		}catch (noCouponsAtPriceRange | customerDoesntExists e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getAllCouponsInTotal/{token}")
	public ResponseEntity<Object> getAllCouponsInTotal(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CustomerFacade service = (CustomerFacade) session.getService();
			return ResponseEntity.ok(service.getAllCouponsInTotal());
		
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}
	
	@GetMapping("/getCustomerDetails/{token}")
	public ResponseEntity<Object> getCustomerDetails(@PathVariable String token) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CustomerFacade service = (CustomerFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getCustomerDetails());
			
		}catch (customerDoesntExists e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
//	@Autowired
//	private CustomerFacade custf;
//
//	@GetMapping("/getAllCoupons")
//	public ResponseEntity<?> getAllCoupons(){
//		try {
//			return ResponseEntity.ok(custf.getAllCoupons());
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		}
//	}
//	
//	@GetMapping("/getAllCouponsInTotal")
//	public ResponseEntity<?> getAllCouponsInTotal(){
//		try {
//			return ResponseEntity.ok(custf.getAllCouponsInTotal());
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		}
//	}
//	
//	
//	@PostMapping("/PurchaseCoupon")
//	public ResponseEntity<?> addCoupon(@RequestBody Coupon coup) {
//		try {
//			custf.purchaseCoupon(coup);
//			return ResponseEntity.ok(coup);
//		} catch (Exception e) {
//			
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		} 
//		
//	}
//	
//	
//	@GetMapping("/getAllCouponsByCategory/{category}")
//	public ResponseEntity<?> getAllCouponsByCategory(@PathVariable Category category){
//		try {
//			return ResponseEntity.ok(custf.getAllCouponsByCatgory(category));
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		}
//	}
//	
//	@GetMapping("/getAllCouponsByMaxPrice/{maxPrice}")
//	public ResponseEntity<?> getAllCouponsByMaxPrice(@PathVariable int maxPrice){
//		try {
//			return ResponseEntity.ok(custf.getCouponsByMaxPrice(maxPrice));
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		}
//	}
//	
	
	
	
}
