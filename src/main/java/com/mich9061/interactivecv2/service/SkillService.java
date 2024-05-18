package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.SkillModel;

public interface SkillService {
    
    public List<SkillModel> getSkills(Long personId);

}
