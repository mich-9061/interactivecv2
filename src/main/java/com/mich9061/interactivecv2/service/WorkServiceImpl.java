package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Work;
import com.mich9061.interactivecv2.model.WorkModel;
import com.mich9061.interactivecv2.repository.WorkRepository;

@Service
public class WorkServiceImpl implements WorkService{

    private WorkRepository workRepository;

    public List<WorkModel> getWorks(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private WorkModel fromEntityToModel(Work entity) {
        if(entity != null) {
            WorkModel work = new WorkModel(
                entity.getPersonId().toString(),
                entity.getStartDate().toString(),
                entity.getEndDate().toString(),
                entity.getCompany(),
                entity.getWorkTitle(),
                entity.getPosition()
            );
            work.setId(entity.getId());
            return work;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public WorkServiceImpl(WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

}
