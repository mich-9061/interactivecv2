package com.mich9061.interactivecv2.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
        @OneToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "contact_information_id")
        private ContactInformation contactInformation;
    
}
