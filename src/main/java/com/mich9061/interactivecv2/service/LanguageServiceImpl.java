package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Language;
import com.mich9061.interactivecv2.model.LanguageModel;
import com.mich9061.interactivecv2.repository.LanguageRepository;

@Service
public class LanguageServiceImpl implements LanguageService{

    private LanguageRepository languageRepository;

    public List<LanguageModel> getLanguages(Long personId) {
        return languageRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private LanguageModel fromEntityToModel(Language entity) {
        if(entity != null) {
            LanguageModel language = new LanguageModel(
                entity.getPersonId().toString(),
                entity.getLanguage(),
                entity.getWrittenLevel(),
                entity.getSpokenLevel(),
                entity.getReadLevel(),
                entity.getLevel(),
                entity.getCertification() == 1,
                entity.getCertificationName(),
                entity.getCertificationLevel(),
                entity.getCertificationDate() != null ? entity.getCertificationDate().toString() : null,
                entity.getAbroadExperience() == 1,
                entity.getAbroadExperience() == 1 && entity.getAbroadMonths() > 0 ? entity.getAbroadMonths() : 0,
                entity.getPosition()
            );
            language.setId(entity.getId());
            return language;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

}
