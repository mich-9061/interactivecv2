package com.mich9061.interactivecv2.controller;

import com.mich9061.interactivecv2.model.ResumeModel;
import com.mich9061.interactivecv2.service.PersonalInformationService;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;

@BrowserCallable
@AnonymousAllowed
public class ResumeController {
    
    private PersonalInformationService personalInformationService;

    public ResumeModel getResumeFromSlug(@NotNull String slug){
        return new ResumeModel(personalInformationService.getPersonalInformationFromSlug(slug));
    }

    public ResumeController(PersonalInformationService personalInformationService){
        this.personalInformationService = personalInformationService;
    }

}
