package com.johnBryce.IdoProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.johnBryce.IdoProject.Beans.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Integer> {
   
}
