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
import java.sql.Date;

@ToString
@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@Entity
@Table(name = "language")
public class Language {
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private String languageName;
        private int writtenLevel;
        private int spokenLevel;
        private int readLevel;
        private int level;
        private int certification;
        private String certificationName;
        private String certificationLevel;
        private Date certificationDate;
        private int abroadExperience;
        private Integer abroadMonths; //perché può essere anche null sul db
        private int position;
        @OneToOne(fetch = FetchType.LAZY, optional = true)
        @JoinColumn(name = "more_information_id", nullable = true)
        private MoreInformation moreInformation;

}