package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Technology;

@Repository
public interface TechnologyRepository extends JpaRepository<Technology, Long>{

    public List<Technology> findByPersonIdOrderByPosition(Long personId);

}
