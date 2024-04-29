package com.mich9061.interactivecv2.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.mich9061.interactivecv2.model.ResumeModel;
import com.mich9061.interactivecv2.service.PersonalInformationServiceImpl;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;

@AnonymousAllowed
@BrowserCallable
public class ResumeController {
    
    private PersonalInformationServiceImpl personalInformationService;

    public ResumeModel getResumeFromId(Long id){
        return new ResumeModel(personalInformationService.getPersonalInformation(id));
    }

    @Autowired
    public ResumeController(PersonalInformationServiceImpl personalInformationService){
        this.personalInformationService = personalInformationService;
    }

}
