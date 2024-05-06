package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long>{

    public List<Skill> findByPersonIdOrderByPosition(Long personId);

}
