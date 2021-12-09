package com.johnBryce.IdoProject.Web;

import com.johnBryce.IdoProject.Facade.ClientFacade;

public class Session {

	private ClientFacade service;
	private long lastAccessed;

	public Session(ClientFacade service, long lastAccessed) {
		super();
		this.service = service;
		this.lastAccessed = lastAccessed;
	}

	public ClientFacade getService() {
		return service;
	}

	public long getLastAccessed() {
		return lastAccessed;
	}

	public void setLastAccessed(long lastAccessed) {
		this.lastAccessed = lastAccessed;
	}
	
	
	
	
	
}
