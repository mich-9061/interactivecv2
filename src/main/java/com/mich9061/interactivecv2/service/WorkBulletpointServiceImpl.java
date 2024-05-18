package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.WorkBulletpoint;
import com.mich9061.interactivecv2.model.WorkBulletpointModel;
import com.mich9061.interactivecv2.repository.WorkBulletpointRepository;

@Service
public class WorkBulletpointServiceImpl implements WorkBulletpointService{

    private WorkBulletpointRepository workBulletpointRepository;
    private MoreInformationService moreInformationService;

    public List<WorkBulletpointModel> getWorkBulletpoints(Long workId) {
        return workBulletpointRepository.findByWorkIdOrderByPosition(workId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private WorkBulletpointModel fromEntityToModel(WorkBulletpoint entity) {
        if(entity != null) {
            WorkBulletpointModel workBulletpoint = new WorkBulletpointModel(
                entity.getWorkId().toString(),
                entity.getJobDescription(),
                entity.getPosition(),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null
            );
            workBulletpoint.setId(entity.getId());
            return workBulletpoint;
        } else {
           //log or throws
            return null;
        }
    } 

    public WorkBulletpointServiceImpl(
        WorkBulletpointRepository workBulletpointRepository,
        MoreInformationService moreInformationService) {
        this.workBulletpointRepository = workBulletpointRepository;
        this.moreInformationService = moreInformationService;
    }

}
