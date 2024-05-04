package com.mich9061.interactivecv2.model;

import com.mich9061.interactivecv2.entity.SchoolType;

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
public class StudyModel extends GenericModel{

  private String personId;
  private String startDate;
  private String endDate;
  private String school;
  private String vote;
  private String courseTitle;
  private String type;
  private int position;
    
}
