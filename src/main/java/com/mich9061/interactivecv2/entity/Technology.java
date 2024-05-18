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
@Table(name = "technology")
public class Technology {
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private String language;
        private Integer level;
        private Integer certification;
        private String certificationName;
        private String certificationLevel;
        private Date certificationDate;
        private Integer experienceYears;
        private Integer projectNumber;
        private int position;
        @OneToOne(fetch = FetchType.LAZY, optional = true)
        @JoinColumn(name = "more_information_id", nullable = true)
        private MoreInformation moreInformation;

}