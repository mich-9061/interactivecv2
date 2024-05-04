package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.StudyModel;

public interface StudyService {
    
    public List<StudyModel> getStudies(Long personId);

}
