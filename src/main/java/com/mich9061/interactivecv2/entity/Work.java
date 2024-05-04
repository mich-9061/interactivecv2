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
    
}
