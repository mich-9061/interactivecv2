package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Study;
import com.mich9061.interactivecv2.model.StudyModel;
import com.mich9061.interactivecv2.repository.StudyRepository;

@Service
public class StudyServiceImpl implements StudyService{

    private StudyRepository studyRepository;

    public List<StudyModel> getStudies(Long personId) {
        return studyRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private StudyModel fromEntityToModel(Study entity) {
        if(entity != null) {
            StudyModel study = new StudyModel(
                entity.getPersonId().toString(),
                entity.getStartDate().toString(),
                entity.getEndDate().toString(),
                entity.getSchool(),
                entity.getVote(),
                entity.getCourseTitle(),
                entity.getType(),
                entity.getPosition()
            );
            study.setId(entity.getId());
            return study;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public StudyServiceImpl(StudyRepository studyRepository) {
        this.studyRepository = studyRepository;
    }

}
