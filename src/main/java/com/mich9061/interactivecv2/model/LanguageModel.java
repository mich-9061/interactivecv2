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
public class LanguageModel extends GenericModel{

  private String personId;
  private String language;
  private int writtenLevel;
  private int spokenLevel;
  private int readLevel;
  private int level;
  private boolean certification;
  private String certificationName;
  private String certificationLevel;
  private String certificationDate;
  private boolean abroadExperience;
  private int abroadMonths;
  private int position;
    
}
