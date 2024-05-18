package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.WorkBulletpointModel;

public interface WorkBulletpointService {
    
    public List<WorkBulletpointModel> getWorkBulletpoints(Long workId);

}
