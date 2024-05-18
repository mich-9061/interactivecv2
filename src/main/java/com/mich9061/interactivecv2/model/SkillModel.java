package com.mich9061.interactivecv2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class SkillModel extends GenericModel{

  private String personId;
  private String description;
  private int position;
  private MoreInformationModel moreInformation;
    
}
