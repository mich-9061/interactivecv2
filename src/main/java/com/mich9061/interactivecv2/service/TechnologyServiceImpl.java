package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Technology;
import com.mich9061.interactivecv2.model.TechnologyModel;
import com.mich9061.interactivecv2.repository.TechnologyRepository;

@Service
public class TechnologyServiceImpl implements TechnologyService{

    private TechnologyRepository technologyRepository;
    private MoreInformationService moreInformationService;

    public List<TechnologyModel> getTechnologies(Long personId) {
        return technologyRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private TechnologyModel fromEntityToModel(Technology entity) {
        if(entity != null) {
            TechnologyModel techology = new TechnologyModel(
                entity.getPersonId().toString(),
                entity.getLanguage(),
                entity.getLevel(),
                entity.getCertification() == 1,
                entity.getCertificationName(),
                entity.getCertificationLevel(),
                entity.getCertificationDate() != null ? entity.getCertificationDate().toString() : null,
                entity.getExperienceYears(),
                entity.getProjectNumber(),
                entity.getPosition(),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null
            );
            techology.setId(entity.getId());
            return techology;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public TechnologyServiceImpl(
        TechnologyRepository technologyRepository,
        MoreInformationService moreInformationService) {
        this.technologyRepository = technologyRepository;
        this.moreInformationService = moreInformationService;
    }

}
