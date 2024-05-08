package com.mich9061.interactivecv2.utils;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class MyUtils {

    private MyUtils () {}
    
    public static String formatDate(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/yyyy");
        return date != null ? sdf.format(date) : "";
    }

}
