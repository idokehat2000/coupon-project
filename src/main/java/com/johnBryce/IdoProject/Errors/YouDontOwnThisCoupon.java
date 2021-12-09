package com.johnBryce.IdoProject.Errors;

public class YouDontOwnThisCoupon extends Exception {
public YouDontOwnThisCoupon() {
	super("you dont own this coupon !");
}
}
