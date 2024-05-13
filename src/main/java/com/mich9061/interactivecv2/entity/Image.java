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
@Table(name = "image")
public class Image{
    
        @Id
        @GeneratedValue
        private Long id;
        private Long personId;
        private String filename;
        private int position;
        @OneToOne(fetch = FetchType.LAZY, optional = true)
        @JoinColumn(name = "more_information_id", nullable = true)
        private MoreInformation moreInformation;

}
