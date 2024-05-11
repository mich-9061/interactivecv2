package com.mich9061.interactivecv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mich9061.interactivecv2.entity.Skill;
import com.mich9061.interactivecv2.model.SkillModel;
import com.mich9061.interactivecv2.repository.SkillRepository;

@Service
public class SkillServiceImpl implements SkillService{

    private SkillRepository workRepository;
    private MoreInformationService moreInformationService;

    public List<SkillModel> getSkills(Long personId) {
        return workRepository.findByPersonIdOrderByPosition(personId).stream().map(this::fromEntityToModel).collect(Collectors.toList());
    }

    private SkillModel fromEntityToModel(Skill entity) {
        if(entity != null) {
            SkillModel work = new SkillModel(
                entity.getPersonId().toString(),
                entity.getDescription(),
                entity.getPosition(),
                entity.getMoreInformation() != null ? moreInformationService.getMoreInformation(entity.getMoreInformation().getId()) : null
            );
            work.setId(entity.getId());
            return work;
        } else {
            //logga qualcosa o throws
            return null;
        }
    } 

    public SkillServiceImpl(
        SkillRepository workRepository,
        MoreInformationService moreInformationService) {
        this.workRepository = workRepository;
        this.moreInformationService = moreInformationService;
    }

}
