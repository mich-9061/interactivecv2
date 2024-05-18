package com.mich9061.interactivecv2.model;

import java.util.List;

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
public class WorkModel extends GenericModel{

  private String personId;
  private String startDate;
  private String endDate;
  private String company;
  private String workTitle;
  private int position;
  private List<WorkBulletpointModel> workBulletpoints;
  private MoreInformationModel moreInformation;
    
}
