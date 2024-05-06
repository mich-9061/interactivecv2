package com.mich9061.interactivecv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mich9061.interactivecv2.entity.Language;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long>{

    public List<Language> findByPersonIdOrderByPosition(Long personId);

}
