package com.mich9061.interactivecv2.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SchoolType {

    SCHOOL("school"),
    CERTIFICATION("certification");

    private String value;
}
