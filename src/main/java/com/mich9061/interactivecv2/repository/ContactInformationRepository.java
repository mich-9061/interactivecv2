package com.mich9061.interactivecv2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.ContactInformation;

@Repository
public interface ContactInformationRepository extends JpaRepository<ContactInformation, Long>{

}