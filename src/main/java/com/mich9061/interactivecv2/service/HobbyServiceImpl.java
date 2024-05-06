package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Hobby;
import com.mich9061.interactivecv2.model.HobbyModel;
import com.mich9061.interactivecv2.repository.HobbyRepository;

@Service
public class HobbyServiceImpl implements HobbyService{

    private HobbyRepository workRepository;
    private HobbyMoreInformationService moreInformationService;

    public List<HobbyModel> getHobbies(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private HobbyModel fromEntityToModel(Hobby entity) {
        if(entity != null) {
            HobbyModel work = new HobbyModel(
                entity.getPersonId().toString(),
                moreInformationService.getHobbyMoreInformation(entity.getMoreInformation().getId()),
                entity.getDescription(),
                entity.getPosition()
            );
            work.setId(entity.getId());
            return work;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public HobbyServiceImpl(
        HobbyRepository workRepository,
        HobbyMoreInformationService moreInformationService) {
        this.workRepository = workRepository;
        this.moreInformationService = moreInformationService;
    }

}
