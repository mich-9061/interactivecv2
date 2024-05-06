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
public class PersonalInformationModel extends GenericModel{

    private String firstName;
    private String secondName;
    private String fiscalCode;
    private String address;
    private String city;
    private String country;
    private String postalCode;
    private String description;
    private ContactInformationModel contactInformation;
    private List<StudyModel> studies;
    private List<WorkModel> works;
    private List<LanguageModel> languages;
    private List<TechnologyModel> technologies;

}