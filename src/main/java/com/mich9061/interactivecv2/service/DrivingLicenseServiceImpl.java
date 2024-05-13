package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.DrivingLicense;
import com.mich9061.interactivecv2.model.DrivingLicenseModel;
import com.mich9061.interactivecv2.repository.DrivingLicenseRepository;

@Service
public class DrivingLicenseServiceImpl implements DrivingLicenseService{

    private DrivingLicenseRepository workRepository;
    private MoreInformationService moreInformationService;

    public List<DrivingLicenseModel> getDrivingLicenses(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private DrivingLicenseModel fromEntityToModel(DrivingLicense entity) {
        if(entity != null) {
            DrivingLicenseModel license = new DrivingLicenseModel(
                entity.getPersonId().toString(),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null,
                entity.getType(),
                entity.getPosition()
            );
            license.setId(entity.getId());
            return license;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public DrivingLicenseServiceImpl(
        DrivingLicenseRepository workRepository,
        MoreInformationService moreInformationService) {
        this.workRepository = workRepository;
        this.moreInformationService = moreInformationService;
    }

}
