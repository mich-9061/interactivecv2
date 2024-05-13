package com.mich9061.interactivecv2.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.MoreInformation;
import com.mich9061.interactivecv2.model.MoreInformationModel;
import com.mich9061.interactivecv2.repository.MoreInformationRepository;

@Service
public class MoreInformationServiceImpl implements MoreInformationService{

    private MoreInformationRepository hobbyMoreInformationRepository;

    public MoreInformationModel getMoreInformation(Long personId) {
        return fromEntityToModel(hobbyMoreInformationRepository.findById(personId));
    }

    private MoreInformationModel fromEntityToModel(Optional<MoreInformation> entity) {
        if(entity.isPresent()) {
            MoreInformationModel information = new MoreInformationModel(
                entity.get().getDescription()
            );
            information.setId(entity.get().getId());
            return information;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public MoreInformationServiceImpl(
        MoreInformationRepository hobbyMoreInformationRepository) {
        this.hobbyMoreInformationRepository = hobbyMoreInformationRepository;
    }

}
