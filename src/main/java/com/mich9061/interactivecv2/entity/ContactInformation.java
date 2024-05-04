package com.mich9061.interactivecv2.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Entity
@Table(name = "contact_information")
public class ContactInformation {
    
        @Id
        @GeneratedValue
        private Long id;
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
    
}

