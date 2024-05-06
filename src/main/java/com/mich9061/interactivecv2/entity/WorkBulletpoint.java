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
@Table(name = "work_bulletpoint")
public class WorkBulletpoint{
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private Long workId;
        private String jobDescription;
        private int position;
    
}
