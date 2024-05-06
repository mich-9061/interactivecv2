package com.mich9061.interactivecv2.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.HobbyMoreInformation;
import com.mich9061.interactivecv2.model.HobbyMoreInformationModel;
import com.mich9061.interactivecv2.repository.HobbyMoreInformationRepository;

@Service
public class HobbyMoreInformationServiceImpl implements HobbyMoreInformationService{

    private HobbyMoreInformationRepository hobbyMoreInformationRepository;

    public HobbyMoreInformationModel getHobbyMoreInformation(Long personId) {
        return fromEntityToModel(hobbyMoreInformationRepository.findById(personId));
    }

    private HobbyMoreInformationModel fromEntityToModel(Optional<HobbyMoreInformation> entity) {
        if(entity.isPresent()) {
            HobbyMoreInformationModel work = new HobbyMoreInformationModel(
                entity.get().getPersonId().toString(),
                entity.get().getDescription(),
                entity.get().getPosition()
            );
            work.setId(entity.get().getId());
            return work;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public HobbyMoreInformationServiceImpl(
        HobbyMoreInformationRepository hobbyMoreInformationRepository) {
        this.hobbyMoreInformationRepository = hobbyMoreInformationRepository;
    }

}
