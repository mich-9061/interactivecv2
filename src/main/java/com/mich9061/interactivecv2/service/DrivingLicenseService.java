package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.DrivingLicenseModel;

public interface DrivingLicenseService {
    
    public List<DrivingLicenseModel> getDrivingLicenses(Long personId);

}
