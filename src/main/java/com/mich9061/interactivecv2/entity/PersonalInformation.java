package com.mich9061.interactivecv2.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
@Table(name = "personal_information")
public class PersonalInformation{
    
        @Id
        @GeneratedValue
        private Long id;
        private String firstName;
        private String secondName;
        private String fiscalCode;
        private String address;
        private String city;
        private String country;
        private String postalCode;
        private String description;
        private String slug;
        @OneToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "contact_information_id")
        private ContactInformation contactInformation;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Study> studies;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Work> works;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Language> languages;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Technology> tecnologies;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Skill> skills;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Hobby> hobbies;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "personId")
        private List<Hobby> drivingLicenses;
        @OneToMany(fetch = FetchType.LAZY)
        @JoinColumn(name = "personId")
        private List<Image> images;

}
