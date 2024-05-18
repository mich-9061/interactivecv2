package com.mich9061.interactivecv2.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SchoolType {

    SCHOOL("school"),
    CERTIFICATION("certification");

    private String value;

    // private SchoolType(String string) {
    //     this.value = string;
    // }

    // public String getValue(){
    //     return this.value;
    // }

}
