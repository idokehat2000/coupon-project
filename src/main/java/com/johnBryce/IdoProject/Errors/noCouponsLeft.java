package com.johnBryce.IdoProject.Errors;

public class noCouponsLeft extends Exception {
public noCouponsLeft() {
	super("coupon sold out !");
}
}
