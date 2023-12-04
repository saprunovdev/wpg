package com.whiteplayground.be.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controller {

  @GetMapping("/number-service")
  public int numberService() {
    Random random = new Random();
    return random.nextInt(100);
  }

  @GetMapping("/current-datetime")
  public String getCurrentDateTime() {
    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
      "yyyy-MM-dd HH:mm:ss"
    );
    return now.format(formatter);
  }
}
