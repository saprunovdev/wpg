package com.whiteplayground.dateservice;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin
public class DateServiceApplication {

  @GetMapping("/")
  public String getCurrentDateTime() {
    ZoneId seoulZoneId = ZoneId.of("Asia/Seoul");
    ZonedDateTime nowInSeoul = ZonedDateTime.now(seoulZoneId);
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
      "yyyy-MM-dd HH:mm:ss"
    );

    return nowInSeoul.format(formatter);
  }

  public static void main(String[] args) {
    SpringApplication.run(DateServiceApplication.class, args);
  }
}
