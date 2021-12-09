package com.johnBryce.IdoProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.johnBryce.IdoProject.Beans.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
     boolean existsCompanyByEmailAndPassword(String email , String password);
     Company findByEmail(String email);
     
}
