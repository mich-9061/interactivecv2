package com.mich9061.interactivecv2.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.ContactInformation;
import com.mich9061.interactivecv2.model.ContactInformationModel;
import com.mich9061.interactivecv2.repository.ContactInformationRepository;

@Service
public class ContactInformationServiceImpl implements ContactInformationService{
    
    private ContactInformationRepository contactInformationRepository;
    private MoreInformationService moreInformationService;

    public ContactInformationModel getContactInformation(Long id) {
        return fromEntityToModel(id != null ? contactInformationRepository.findById(id) : Optional.empty());
    }

    private ContactInformationModel fromEntityToModel(Optional<ContactInformation> entity) {
        if(entity.isPresent()) {
            ContactInformationModel contactInformation = new ContactInformationModel(
                entity.get().getHomeAddress(),
                entity.get().getHomeCity(),
                entity.get().getHomeCountry(),
                entity.get().getHomePostalCode(),
                entity.get().getEmail(),
                entity.get().getPhone(),
                entity.get().getLinkedinProfile(),
                entity.get().getGithubProfile(),
                entity.get().getWebsite(),
                entity.get().getOther(),
                entity.get().getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.get().getMoreInformation().getId()) : null
            );
            contactInformation.setId(entity.get().getId());
            return contactInformation;
        } else {
            //logga qualcosa o throws
            return null;
        }

    }

    public ContactInformationServiceImpl(
        ContactInformationRepository contactInformationRepository,
        MoreInformationService moreInformationService) {
        this.contactInformationRepository = contactInformationRepository;
        this.moreInformationService = moreInformationService;
    }

}
