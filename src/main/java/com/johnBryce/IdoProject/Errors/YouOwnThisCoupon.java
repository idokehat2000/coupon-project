package com.johnBryce.IdoProject.Errors;

public class YouOwnThisCoupon extends Exception {
public YouOwnThisCoupon() {
	super("you own this coupon already !");
}
}
