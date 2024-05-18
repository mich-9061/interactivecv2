package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Study;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long>{

    public List<Study> findByPersonIdOrderByPosition(Long personId);

}
