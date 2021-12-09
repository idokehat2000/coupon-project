package com.johnBryce.IdoProject.Login;

import java.sql.SQLException;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Service;

import com.johnBryce.IdoProject.Errors.companyDoesntExists;
import com.johnBryce.IdoProject.Errors.customerDoesntExists;
import com.johnBryce.IdoProject.Facade.AdminFacade;
import com.johnBryce.IdoProject.Facade.ClientFacade;
import com.johnBryce.IdoProject.Facade.CompanyFacade;
import com.johnBryce.IdoProject.Facade.CustomerFacade;
@Service
public class LoginManager {

	@Autowired
	ConfigurableApplicationContext ctx;
	

	public ClientFacade Login (String email , String password , ClientType clientType) throws SQLException, LoginException, companyDoesntExists, NoSuchElementException, customerDoesntExists  {
		
		if(clientType.equals(ClientType.Administrator) ) {
			AdminFacade af = ctx.getBean(AdminFacade.class);
			
			
				if(af.login(email, password)==true) {
					System.out.println("welcom admin !");
					return af;
				}
				
		}
		else if(clientType.equals(ClientType.Company)) {
			CompanyFacade cf = ctx.getBean(CompanyFacade.class);
			
			
				if(cf.login(email, password)==true) {
					System.out.println("welcome" + " " + cf.getCompanyDetails().getName() +"!");
					return cf;
				}
				
		}
		else if(clientType.equals(ClientType.Customer)) {
			CustomerFacade custf = ctx.getBean(CustomerFacade.class);
			
				if(custf.login(email, password)==true) {
					System.out.println("welcome"+" " + custf.getCustomerDetails().getFirstName() + "!");
					return custf;
				}
				
		
		
		
		}
			
			return null;
		
		
		
		
	
	
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	




}
