package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long>{

    public List<Image> findByPersonIdOrderByPosition(Long personId);

}
