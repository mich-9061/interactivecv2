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

    public List<WorkBulletpointModel> getWorkBulletpoints(Long workId) {
        return workBulletpointRepository.findByWorkIdOrderByPosition(workId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private WorkBulletpointModel fromEntityToModel(WorkBulletpoint entity) {
        if(entity != null) {
            WorkBulletpointModel workBulletpoint = new WorkBulletpointModel(
                entity.getPersonId().toString(),
                entity.getWorkId().toString(),
                entity.getJobDescription(),
                entity.getPosition()
            );
            workBulletpoint.setId(entity.getId());
            return workBulletpoint;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public WorkBulletpointServiceImpl(WorkBulletpointRepository workBulletpointRepository) {
        this.workBulletpointRepository = workBulletpointRepository;
    }

}