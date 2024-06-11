package com.mich9061.interactivecv2.controller;

import com.mich9061.interactivecv2.model.ResumeModel;
import com.mich9061.interactivecv2.service.PersonalInformationService;

import dev.hilla.BrowserCallable;
import jakarta.annotation.security.RolesAllowed;

@RolesAllowed("admin")
@BrowserCallable
public class ResumeController {
    
    private PersonalInformationService personalInformationService;

    public ResumeModel getResumeFromSlug(String slug){
        return new ResumeModel(personalInformationService.getPersonalInformationFromSlug(slug));
    }

    public ResumeController(PersonalInformationService personalInformationService){
        this.personalInformationService = personalInformationService;
    }

}
