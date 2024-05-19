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
    private ImageService imageService;

    public PersonalInformationModel getPersonalInformationFromSlug(String slug) {
        return fromEntityToModel(slug != null ? personalInformationRepository.findBySlug(slug) : Optional.empty());
    }

    private PersonalInformationModel fromEntityToModel(Optional<PersonalInformation> entity) {
        if(entity.isPresent()) {
            Long id = entity.get().getId();
            PersonalInformationModel personalInformation = new PersonalInformationModel(
                entity.get().getFirstName(),
                entity.get().getSecondName(),
                entity.get().getFiscalCode(),
                entity.get().getAddress(),
                entity.get().getCity(),
                entity.get().getCountry(),
                entity.get().getPostalCode(),
                entity.get().getDescription(),
                entity.get().getSlug(),
                contactInformationService.getContactInformation(entity.get().getContactInformation().getId()),
                studyService.getStudies(id),
                workService.getWorks(id),
                languageService.getLanguages(id),
                technologyService.getTechnologies(id),
                skillService.getSkills(id),
                hobbyService.getHobbies(id),
                drivingLicenseService.getDrivingLicenses(id),
                imageService.getImages(id)
            );
            personalInformation.setId(id);
            return personalInformation;
        } else {
            //log or throws
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
        DrivingLicenseService drivingLicenseService,
        ImageService imageService) {
        this.personalInformationRepository = personalInformationRepository;
        this.contactInformationService = contactInformationService;
        this.studyService = studyService;
        this.workService = workService;
        this.languageService = languageService;
        this.technologyService = technologyService;
        this.skillService = skillService;
        this.hobbyService = hobbyService;
        this.drivingLicenseService = drivingLicenseService;
        this.imageService = imageService;
    }

}
