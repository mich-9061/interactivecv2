package com.mich9061.interactivecv2.entity;

import java.sql.Date;
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
@Table(name = "work")
public class Work{
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private Date startDate;
        private Date endDate;
        private String company;
        private String workTitle;
        private int position;
        @OneToMany(fetch = FetchType.EAGER)
        @JoinColumn(name = "workId")
        private List<WorkBulletpoint> workBulletpoints;
        @OneToOne(fetch = FetchType.LAZY, optional = true)
        @JoinColumn(name = "more_information_id", nullable = true)
        private MoreInformation moreInformation;
    
}
