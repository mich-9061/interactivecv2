package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Work;

@Repository
public interface WorkRepository extends JpaRepository<Work, Long>{

    public List<Work> findByPersonIdOrderByPosition(Long personId);

}
