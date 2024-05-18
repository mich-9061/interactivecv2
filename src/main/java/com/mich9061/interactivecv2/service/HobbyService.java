package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.HobbyModel;

public interface HobbyService {
    
    public List<HobbyModel> getHobbies(Long personId);

}
