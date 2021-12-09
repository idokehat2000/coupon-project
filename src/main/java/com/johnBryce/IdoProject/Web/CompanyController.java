package com.johnBryce.IdoProject.Web;

import java.util.List;
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
import com.johnBryce.IdoProject.Beans.Company;
import com.johnBryce.IdoProject.Beans.Coupon;
import com.johnBryce.IdoProject.Beans.Customer;
import com.johnBryce.IdoProject.Errors.CompanyAlreadyExists;
import com.johnBryce.IdoProject.Errors.YouDontOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.couponAlreadyExists;
import com.johnBryce.IdoProject.Errors.couponDateExpired;
import com.johnBryce.IdoProject.Errors.couponDoesntExists;
import com.johnBryce.IdoProject.Errors.customerAlreadyExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;
import com.johnBryce.IdoProject.Errors.noCouponsAtPriceRange;
import com.johnBryce.IdoProject.Errors.noCouponsByCatgory;
import com.johnBryce.IdoProject.Errors.youDontHaveAnyCoupons;
import com.johnBryce.IdoProject.Facade.AdminFacade;
import com.johnBryce.IdoProject.Facade.CompanyFacade;
import com.johnBryce.IdoProject.Facade.CustomerFacade;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@RestController
@RequestMapping("Company")
@CrossOrigin("http://localhost:4200")

public class CompanyController {


	@Autowired
	Map<String, Session> sessionsMap;

	public CompanyController() {
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

	@PostMapping("/addCoupon/{token}")
	public ResponseEntity<Object> addCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CompanyFacade service = (CompanyFacade) session.getService();
			try {
				System.out.println(coupon);
				service.addCoupon(coupon);
				return ResponseEntity.ok(coupon);
			} catch (couponAlreadyExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@PutMapping("/updateCoupon/{token}")
	public ResponseEntity<Object> updateCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CompanyFacade service = (CompanyFacade) session.getService();
			try {
				service.updateCoupon(coupon);
				return ResponseEntity.ok(coupon);
			} catch (couponDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@DeleteMapping("/deleteCoupon/{token}/{id}")
	public ResponseEntity<Object> deleteCoupon(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CompanyFacade service = (CompanyFacade) session.getService();
			try {
				service.deleteCoupon(id);
				return ResponseEntity.ok("Company id: " + id + " was deleted!");
			} catch (couponDoesntExists | YouDontOwnThisCoupon e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/getAllCoupons/{token}")
	public ResponseEntity<Object> getAllCoupons(@PathVariable String token) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getAllCoupons());
			
		}catch (youDontHaveAnyCoupons e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}

	@GetMapping("/getOneCoupon/{token}/{id}")
	public ResponseEntity<Object> getOneCoupon(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			CompanyFacade service = (CompanyFacade) session.getService();
			try {
			if (service.getOneCoupon(id) == null)
				return ResponseEntity.badRequest().body("Error: Company Not Exists!");
				return ResponseEntity.ok(service.getOneCoupon(id));
			} catch (couponDoesntExists | YouDontOwnThisCoupon e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			} 
		}else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		
		}
	

	
	@GetMapping("/getCouponsByCategory/{token}/{category}")
	public ResponseEntity<Object> getCouponsByCategory(@PathVariable String token, @PathVariable Category category) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getCouponsByCatgory(category));
			
		}catch (noCouponsByCatgory e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getCouponsByMaxPrice/{token}/{maxPrice}")
	public ResponseEntity<Object> getCouponsByMaxPrice(@PathVariable String token, @PathVariable int maxPrice) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getCouponsByMaxPrice(maxPrice));
			
		}catch (noCouponsAtPriceRange e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
	@GetMapping("/getCompanyDetails/{token}")
	public ResponseEntity<Object> getCompanyDetails(@PathVariable String token) throws NoSuchElementException, youDontHaveAnyCoupons {
		
		Session session = sessionsMap.get(token);
		session.setLastAccessed(System.currentTimeMillis());
		CompanyFacade service = (CompanyFacade) session.getService();
		try {
			return ResponseEntity.ok(service.getCompanyDetails());
			
		}catch (companyDoesntExists e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	
//	@Autowired
//	private CompanyFacade comf;
//
//	@GetMapping("/getAllCoupons")
//	public ResponseEntity<?> getAllCoupons(){
//		try {
//			return ResponseEntity.ok(comf.getAllCoupons());
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		}
//	}
//	
//	@GetMapping("/getOneCoupon/{id}")
//	public ResponseEntity<?> getOneCoupon(@PathVariable int id){
//		try {
//			return ResponseEntity.ok(comf.getOneCoupon(id));
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		}
//	}
//	
//	@PostMapping("/addCoupon")
//	public ResponseEntity<?> addCoupon(@RequestBody Coupon coup) {
//		try {
//			comf.addCoupon(coup);
//			return ResponseEntity.ok(coup);
//		} catch (Exception e) {
//			
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//		} 
//		
//	}
//	
//	@PutMapping("/updateCoupon")
//	public ResponseEntity<?> updateCoupon(@RequestBody Coupon coup) {
//	   try {
//		comf.addCoupon(coup);
//		return ResponseEntity.ok(coup);
//	} catch (Exception e) {
//		
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//	} 
//	
//	}
//	
//	@DeleteMapping("/deleteCoupon/{id}")
//	public ResponseEntity<?> deleteCoupon(@PathVariable int id) {
//		try {
//			comf.deleteCoupon(id);
//			return ResponseEntity.noContent().build();
//		} catch (Exception e) {
//			
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		} 
//		
//	}
//	
//	@GetMapping("/getAllCouponsByCategory/{category}")
//	public ResponseEntity<?> getAllCouponsByCategory(@PathVariable Category category){
//		try {
//			return ResponseEntity.ok(comf.getCouponsByCatgory(category));
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		}
//	}
//	
//	@GetMapping("/getAllCouponsByMaxPrice/{maxPrice}")
//	public ResponseEntity<?> getAllCouponsByMaxPrice(@PathVariable int maxPrice){
//		try {
//			return ResponseEntity.ok(comf.getCouponsByMaxPrice(maxPrice));
//			
//		}catch(Exception e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//		}
//	}
	
	
	
}
