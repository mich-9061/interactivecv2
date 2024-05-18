package com.mich9061.interactivecv2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.MoreInformation;

@Repository
public interface MoreInformationRepository extends JpaRepository<MoreInformation, Long>{

}
