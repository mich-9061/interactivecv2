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
public class TechnologyModel extends GenericModel{

  private String personId;
  private String language;
  private int level;
  private boolean certification;
  private String certificationName;
  private String certificationLevel;
  private String certificationDate;
  private int experienceYears;
  private int projectNumber;
  private int position;
    
}
