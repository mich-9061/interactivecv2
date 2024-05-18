package com.mich9061.interactivecv2.service;

import java.util.List;

import com.mich9061.interactivecv2.model.ImageModel;

public interface ImageService {
    
    public List<ImageModel> getImages(Long personId);

}
