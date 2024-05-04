package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.WorkModel;

public interface WorkService {
    
    public List<WorkModel> getWorks(Long personId);

}
