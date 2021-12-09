package com.johnBryce.IdoProject.Web;

import java.sql.SQLException;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.johnBryce.IdoProject.Facade.ClientFacade;
import com.johnBryce.IdoProject.Login.ClientType;
import com.johnBryce.IdoProject.Login.LoginManager;


@RestController
@RequestMapping("LoginController")
@CrossOrigin("http://localhost:4200")
public class LoginController {

	
	@Autowired
	private LoginManager loginManager;

	@Autowired
	private Map<String, Session> sessionsMap;

	@PostMapping("/login/{email}/{password}/{type}")
	public ResponseEntity<?> login(@PathVariable String email, @PathVariable String password, @PathVariable ClientType type) {
		String token = UUID.randomUUID().toString();
		try {
			ClientFacade service = loginManager.Login(email, password, type);
			if(service instanceof ClientFacade) {
				
				if(service != null) {
					Session session = new Session(service, System.currentTimeMillis());
					
					sessionsMap.put(token, session);
					System.out.println(token);
					
					return ResponseEntity.ok(token);
				}
			}
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
		
	}

	@PostMapping("/logout/{token}")
	public void logout(@PathVariable String token) {
		sessionsMap.remove(token);
	}
	
	
	
	
	
	
}
