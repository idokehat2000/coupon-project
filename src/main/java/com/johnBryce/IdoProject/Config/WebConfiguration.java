package com.johnBryce.IdoProject.Config;

import java.util.HashMap;
import java.util.Map;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.johnBryce.IdoProject.Facade.AdminFacade;
import com.johnBryce.IdoProject.Facade.ClientFacade;
import com.johnBryce.IdoProject.Web.Session;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@Aspect
public class WebConfiguration {

	/*
	@Around("execution(* com.johnBryce.IdoProject.Web.AdminController.*(..))")
	public ResponseEntity<?> authenticate(ProceedingJoinPoint point) throws Throwable {
		// get the first param of the method
		String token = (String) point.getArgs()[0];
		if(sessionsMap().containsKey(token)) {
			Session curSession = sessionsMap().get(token);
			// check the service
			ClientFacade admin = curSession.getService();
			if(admin instanceof AdminFacade 
					&& (System.currentTimeMillis() - curSession.getLastAccessed()) < 1000*30 * 60) {
				
				return (ResponseEntity<?>) point.proceed();
				
			} else {
				sessionsMap().remove(token);
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}
	*/
	
	
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).build();
	}

	@Bean
	public Map<String, Session> sessionsMap() {
	//	return new HashMap<String, Session>();
		return new HashMap<String, Session>();
	}
	
}
