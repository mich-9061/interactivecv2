package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.WorkBulletpoint;

@Repository
public interface WorkBulletpointRepository extends JpaRepository<WorkBulletpoint, Long>{

    public List<WorkBulletpoint> findByWorkIdOrderByPosition(Long personId);

}
