package com.mich9061.interactivecv2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mich9061.interactivecv2.model.ResumeModel;
import com.mich9061.interactivecv2.service.PersonalInformationServiceImpl;

@RestController
public class ResumeController {
    
    private PersonalInformationServiceImpl personalInformationService;

    @GetMapping(value="/resume/{id}")
    public ResumeModel getResumeFromId(@PathVariable Long id){
        return new ResumeModel(personalInformationService.getPersonalInformation(id));
    }

    @Autowired
    public ResumeController(PersonalInformationServiceImpl personalInformationService){
        this.personalInformationService = personalInformationService;
    }

}
