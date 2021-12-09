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
import com.johnBryce.IdoProject.Beans.Company;
import com.johnBryce.IdoProject.Beans.Customer;
import com.johnBryce.IdoProject.Errors.CompanyAlreadyExists;
import com.johnBryce.IdoProject.Errors.YouDontOwnThisCoupon;
import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.customerAlreadyExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;
import com.johnBryce.IdoProject.Facade.AdminFacade;

@RestController
@RequestMapping("Admin")
@CrossOrigin("http://localhost:4200")

public class AdminController {

	@Autowired
	Map<String, Session> sessionsMap;

	public AdminController() {
	}

	private void isTimeOut(Session session, String token) {
		if (session != null) {
			long timeSession = session.getLastAccessed();
			long timeNow = System.currentTimeMillis();
			if ((timeNow - timeSession) > 1000 * 60 * 30) {
				System.out.println("TIMEOUT!!");
				sessionsMap.remove(token);
				session = null;
			}
		}
	}

	@PostMapping("/addCompany/{token}")
	public ResponseEntity<Object> addCompany(@PathVariable String token, @RequestBody Company company) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.addCompany(company);
				return ResponseEntity.ok(company);
			} catch (CompanyAlreadyExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@PutMapping("/updateCompany/{token}")
	public ResponseEntity<Object> updateCompany(@PathVariable String token, @RequestBody Company company) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.updateCompany(company);
				return ResponseEntity.ok(company);
			} catch (companyDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@DeleteMapping("/deleteCompany/{token}/{id}")
	public ResponseEntity<Object> deleteCompany(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.deleteCompany(id);
				return ResponseEntity.ok("Company id: " + id + " was deleted!");
			} catch (companyDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		} else 
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/getAllCompanies/{token}")
	public ResponseEntity<Object> getAllCompanies(@PathVariable String token) {
		
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if(session != null) {
			
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			return ResponseEntity.ok(service.getAllCompanies());
		}else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("unauthorized login");
		
	}

	@GetMapping("/getOneCompany/{token}/{id}")
	public ResponseEntity<Object> getOneCompany(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
			if (service.getOneCompany(id) == null)
				return ResponseEntity.badRequest().body("Error: Company Not Exists!");
				return ResponseEntity.ok(service.getOneCompany(id));
			} catch (companyDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			} 
		}else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		
		}
	

	@PostMapping("/addCustomer/{token}")
	public ResponseEntity<Object> addCustomer(@PathVariable String token, @RequestBody Customer customer) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.addCustomer(customer);
				return ResponseEntity.ok(customer);
			} catch (customerAlreadyExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@PutMapping("/updateCustomer/{token}")
	public ResponseEntity<Object> updateCustomer(@PathVariable String token, @RequestBody Customer customer) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.updateCustomer(customer);
				return ResponseEntity.ok(customer);
			} catch (customerDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@DeleteMapping("/deleteCustomer/{token}/{id}")
	public ResponseEntity<Object> deleteCustomer(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
				service.deleteCustomer(id);
				return ResponseEntity.ok("Customer id: " + id + " was deleted!");
			} catch (customerDoesntExists e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/getAllCustomers/{token}")
	public ResponseEntity<Object> getAllCustomers(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			return ResponseEntity.ok(service.getAllCustomers());
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/getOneCustomer/{token}/{id}")
	public ResponseEntity<Object> getOneCustomer(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		isTimeOut(session, token);
		if (session != null) {
			session.setLastAccessed(System.currentTimeMillis());
			AdminFacade service = (AdminFacade) session.getService();
			try {
			if (service.getOneCustomer(id) == null)
				return ResponseEntity.badRequest().body("Error: Customer Not Exists!");
			return ResponseEntity.ok(service.getOneCustomer(id));
		
			}catch (Exception e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		}else
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}	
	
	
	

	
	
/*	

	@Autowired
	private AdminFacade admf;

	@GetMapping("/getAllCompanies")
	public ResponseEntity<List<Company>> getAllCompanies(){
		return ResponseEntity.ok(admf.getAllCompanies());
	}
	
	@GetMapping("/getAllCustomers")
	public ResponseEntity<List<Customer>> getAllCustomers(){
		return ResponseEntity.ok(admf.getAllCustomers());
	}
	
	@PostMapping("/addCompany")
	public ResponseEntity<?> addCompany(@RequestBody Company comp) {
		try {
			admf.addCompany(comp);
			return ResponseEntity.ok(comp);
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		} 
		
	}
	
	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer cust) {
	   try {
		admf.addCustomer(cust);
		return ResponseEntity.ok(cust);
	} catch (Exception e) {
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	} 
	
	}
	
	@PutMapping("/updateCompany")
	public ResponseEntity<?> updateCompany(@RequestBody Company comp) {
		try {
			admf.updateCompany(comp);
			return ResponseEntity.ok(comp);
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		} 
		
	}
	
	@PutMapping("/updateCustomer")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer cust) {
	   try {
		admf.updateCustomer(cust);
		return ResponseEntity.ok(cust);
	} catch (Exception e) {
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	} 
	
	}
	
	@GetMapping("/getOneCompany/{id}")
	public ResponseEntity<?> getOneCompany(@PathVariable int id){
		try {
			Company comp = admf.getOneCompany(id);
			return ResponseEntity.ok(comp);
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	@GetMapping("/getOneCustomer/{id}")
	public ResponseEntity<?> getOneCustomer(@PathVariable int id){
		try {
			Customer cust = admf.getOneCustomer(id);
			return ResponseEntity.ok(cust);
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	@DeleteMapping("deleteCompany/{id}")
	public ResponseEntity<?> deleteCompany(@PathVariable int id){
		try {
			admf.deleteCompany(id);
			return ResponseEntity.noContent().build();
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	@DeleteMapping("deleteCustomer/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable int id){
		try {
			admf.deleteCustomer(id);
			return ResponseEntity.noContent().build();
		} catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
	
	
	
	*/
}
