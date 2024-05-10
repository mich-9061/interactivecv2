package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Study;
import com.mich9061.interactivecv2.model.MoreInformationModel;
import com.mich9061.interactivecv2.model.StudyModel;
import com.mich9061.interactivecv2.repository.StudyRepository;
import com.mich9061.interactivecv2.utils.MyUtils;

@Service
public class StudyServiceImpl implements StudyService{

    private StudyRepository studyRepository;
    private MoreInformationService moreInformationService;

    public List<StudyModel> getStudies(Long personId) {
        return studyRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private StudyModel fromEntityToModel(Study entity) {
        if(entity != null) {
            StudyModel study = new StudyModel(
                entity.getPersonId().toString(),
                MyUtils.formatDate(entity.getStartDate()),
                MyUtils.formatDate(entity.getEndDate()),
                entity.getSchool(),
                entity.getVote(),
                entity.getCourseTitle(),
                entity.getType(),
                entity.getPosition(),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null
            );
            study.setId(entity.getId());
            return study;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public StudyServiceImpl(
        StudyRepository studyRepository,
        MoreInformationService moreInformationService) {
        this.studyRepository = studyRepository;
        this.moreInformationService = moreInformationService;
    }

}
