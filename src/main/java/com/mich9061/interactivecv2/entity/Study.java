package com.mich9061.interactivecv2.entity;

import java.sql.Date;

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
@Table(name = "study")
public class Study{
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private Date startDate;
        private Date endDate;
        private String school;
        private String vote;
        private String courseTitle;
        // @Enumerated(EnumType.STRING)
        // @Column(name="type")
        private String type;
        private int position;
    
}
