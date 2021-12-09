package com.johnBryce.IdoProject.Beans;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "coupons")
public class Coupon {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
@ManyToOne(optional = false)
@JoinColumn(foreignKey = @ForeignKey(name = "FK_Company"))
private Company company;
@Column(nullable = false)
private String title;
@Column(nullable = false)
//@Enumerated(EnumType.STRING)
private Category category;
@Column
private String description;
@Column
private String image;
@Column(nullable = false)
private Date StartDate;
@Column(nullable = false)
private Date endDate;
@Column(nullable = false)
private int amount;
@Column(nullable = false)
private double price;
@ManyToMany(fetch = FetchType.EAGER)
private Set<Customer> customers;


public Coupon() {
	//empty ctr for hibernate
}

public Coupon(Company company, String title, Category category, String description, String image, Date startDate,
		Date endDate, int amount, double price) {
	super();
	this.company = company;
	this.title = title;
	this.category = category;
	this.description = description;
	this.image = image;
	StartDate = startDate;
	this.endDate = endDate;
	this.amount = amount;
	this.price = price;
	
}


public Company getCompany() {
	return company;
}


public void setCompany(Company company) {
	this.company = company;
}

public String getTitle() {
	return title;
}


public void setTitle(String title) {
	this.title = title;
}


public Category getCategory() {
	return category;
}


public void setCategory(Category category) {
	this.category = category;
}


public String getDescription() {
	return description;
}


public void setDescription(String description) {
	this.description = description;
}


public String getImage() {
	return image;
}


public void setImage(String image) {
	this.image = image;
}


public Date getStartDate() {
	return StartDate;
}


public void setStartDate(Date startDate) {
	StartDate = startDate;
}


public Date getEndDate() {
	return endDate;
}


public void setEndDate(Date endDate) {
	this.endDate = endDate;
}


public int getAmount() {
	return amount;
}


public void setAmount(int amount) {
	this.amount = amount;
}


public double getPrice() {
	return price;
}


public void setPrice(double price) {
	this.price = price;
}


public Set<Customer> getCustomers() {
	return customers;
}


public int getId() {
	return id;
}

@Override
	public boolean equals(Object obj) {
		
		return this.id == ((Coupon)obj).id;
	}

@Override
	public int hashCode() {
		
		return id;
	}


@Override
public String toString() {
	return "Coupon [id=" + id + ", company=" + company + ", title=" + title + ", category=" + category
			+ ", description=" + description + ", image=" + image + ", StartDate=" + StartDate + ", endDate=" + endDate
			+ ", amount=" + amount + ", price=" + price + "]";
}








}
