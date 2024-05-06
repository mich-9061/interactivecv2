package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.LanguageModel;

public interface LanguageService {
    
    public List<LanguageModel> getLanguages(Long personId);

}
