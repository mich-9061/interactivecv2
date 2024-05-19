package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Work;
import com.mich9061.interactivecv2.model.WorkModel;
import com.mich9061.interactivecv2.repository.WorkRepository;
import com.mich9061.interactivecv2.utils.MyUtils;

@Service
public class WorkServiceImpl implements WorkService{

    private WorkRepository workRepository;
    private WorkBulletpointService workBulletpointService;
    private MoreInformationService moreInformationService;

    public List<WorkModel> getWorks(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private WorkModel fromEntityToModel(Work entity) {
        if(entity != null) {
            WorkModel work = new WorkModel(
                entity.getPersonId().toString(),
                MyUtils.formatDate(entity.getStartDate()),
                MyUtils.formatDate(entity.getEndDate()),
                entity.getCompany(),
                entity.getWorkTitle(),
                entity.getPosition(),
                workBulletpointService.getWorkBulletpoints(entity.getId()),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null
            );
            work.setId(entity.getId());
            return work;
        } else {
            //log or throws
            return null;
        }
    } 

    public WorkServiceImpl(
        WorkRepository workRepository,
        WorkBulletpointService workBulletpointService,
        MoreInformationService moreInformationService) {
        this.workRepository = workRepository;
        this.workBulletpointService = workBulletpointService;
        this.moreInformationService = moreInformationService;
    }

}
