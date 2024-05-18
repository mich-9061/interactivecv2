package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.DrivingLicense;

@Repository
public interface DrivingLicenseRepository extends JpaRepository<DrivingLicense, Long>{

    public List<DrivingLicense> findByPersonIdOrderByPosition(Long personId);

}
