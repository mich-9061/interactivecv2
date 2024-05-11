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
public class ContactInformationModel extends GenericModel{
    
    private String homeAddress;
    private String homeCity;
    private String homeCountry;
    private String homePostalCode;
    private String email;
    private String phone;
    private String linkedinProfile;
    private String githubProfile;
    private String website;
    private String other;
    private MoreInformationModel moreInformation;

}
