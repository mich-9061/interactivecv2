package com.mich9061.interactivecv2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.PersonalInformation;
import com.mich9061.interactivecv2.model.PersonalInformationModel;
import com.mich9061.interactivecv2.repository.PersonalInformationRepository;

@Service
public class PersonalInformationServiceImpl implements PersonalInformationService{
    
    private PersonalInformationRepository personalInformationRepository;
    private ContactInformationService contactInformationService;
    private StudyService studyService;
    private WorkService workService;
    private LanguageService languageService;
    private TechnologyService technologyService;
    private SkillService skillService;
    private HobbyService hobbyService;
    private DrivingLicenseService drivingLicenseService;

    public PersonalInformationModel getPersonalInformation(Long id) {
        return fromEntityToModel(id != null ? personalInformationRepository.findById(id) : Optional.empty());
    }

    private PersonalInformationModel fromEntityToModel(Optional<PersonalInformation> entity) {
        if(entity.isPresent()) {
            PersonalInformationModel personalInformation = new PersonalInformationModel(
                entity.get().getFirstName(),
                entity.get().getSecondName(),
                entity.get().getFiscalCode(),
                entity.get().getAddress(),
                entity.get().getCity(),
                entity.get().getCountry(),
                entity.get().getPostalCode(),
                entity.get().getDescription(),
                contactInformationService.getContactInformation(entity.get().getContactInformation().getId()),
                studyService.getStudies(entity.get().getId()),
                workService.getWorks(entity.get().getId()),
                languageService.getLanguages(entity.get().getId()),
                technologyService.getTechnologies(entity.get().getId()),
                skillService.getSkills(entity.get().getId()),
                hobbyService.getHobbies(entity.get().getId()),
                drivingLicenseService.getDrivingLicenses(entity.get().getId())
            );
            personalInformation.setId(entity.get().getId());
            return personalInformation;
        } else {
            //logga qualcosa o throws
            return null;
        }

    }

    @Autowired
    public PersonalInformationServiceImpl(
        PersonalInformationRepository personalInformationRepository, 
        ContactInformationService contactInformationService, 
        StudyService studyService,
        WorkService workService,
        LanguageService languageService,
        TechnologyService technologyService,
        SkillService skillService,
        HobbyService hobbyService,
        DrivingLicenseService drivingLicenseService) {
        this.personalInformationRepository = personalInformationRepository;
        this.contactInformationService = contactInformationService;
        this.studyService = studyService;
        this.workService = workService;
        this.languageService = languageService;
        this.technologyService = technologyService;
        this.skillService = skillService;
        this.hobbyService = hobbyService;
        this.drivingLicenseService = drivingLicenseService;
    }

}
