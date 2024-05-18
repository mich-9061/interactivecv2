package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.TechnologyModel;

public interface TechnologyService {
    
    public List<TechnologyModel> getTechnologies(Long personId);

}
