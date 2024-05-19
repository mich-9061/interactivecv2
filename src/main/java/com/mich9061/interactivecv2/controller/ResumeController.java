package com.mich9061.interactivecv2.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.mich9061.interactivecv2.model.ResumeModel;
import com.mich9061.interactivecv2.service.PersonalInformationService;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;

@AnonymousAllowed
@BrowserCallable
public class ResumeController {
    
    private PersonalInformationService personalInformationService;

    public ResumeModel getResumeFromSlug(String slug){
        return new ResumeModel(personalInformationService.getPersonalInformationFromSlug(slug));
    }

    @Autowired
    public ResumeController(PersonalInformationService personalInformationService){
        this.personalInformationService = personalInformationService;
    }

}
