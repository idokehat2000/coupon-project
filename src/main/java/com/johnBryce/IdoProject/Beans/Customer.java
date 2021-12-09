package com.johnBryce.IdoProject.Beans;


import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "customers")
public class Customer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
@Column(nullable = false)
private String firstName;
@Column(nullable = false)
private String lastName;
@Column(unique = true)
private String email;
@Column(nullable = false)
private String password;
@ManyToMany(mappedBy = "customers" , fetch = FetchType.EAGER)
@JsonIgnore
private Set <Coupon> coupons;

public Customer() {
	//empty ctr for hibernate
}

public Customer(String firstName, String lastName, String email, String password) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public Set<Coupon> getCoupons() {
	return coupons;
}

public void setCoupons(Set<Coupon> coupons) {
	this.coupons = coupons;
}

public int getId() {
	return id;
}

@Override
public String toString() {
	return "Customer [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
			+ ", password=" + password + ", coupons=" + coupons + "]";
}










}
