package com.mich9061.interactivecv2.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Image;
import com.mich9061.interactivecv2.model.ImageModel;
import com.mich9061.interactivecv2.repository.ImageRepository;

@Service
public class ImageServiceImpl implements ImageService{

    private ImageRepository workRepository;
    private MoreInformationService moreInformationService;

    public List<ImageModel> getImages(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(t -> {
            try {
                return fromEntityToModel(t);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }).collect(Collectors.toList());
    }

    private ImageModel fromEntityToModel(Image entity) throws IOException {
        if(entity != null) {
            return new ImageModel(
                loadImage("src/main/resources/images/" + entity.getPersonId().toString() + "/" + entity.getFilename()),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null,
                entity.getPosition()
            );
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public ImageServiceImpl(
        ImageRepository workRepository,
        MoreInformationService moreInformationService) {
        this.workRepository = workRepository;
        this.moreInformationService = moreInformationService;
    }

    private String loadImage(String imagePath) throws IOException {
        return Base64.getEncoder().encodeToString(Files.readAllBytes(Path.of(imagePath)));
    }

}
