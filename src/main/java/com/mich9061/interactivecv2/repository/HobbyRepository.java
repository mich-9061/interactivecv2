package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Hobby;

@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Long>{

    public List<Hobby> findByPersonIdOrderByPosition(Long personId);

}
