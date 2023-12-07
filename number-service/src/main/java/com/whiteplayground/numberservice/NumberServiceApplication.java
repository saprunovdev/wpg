package com.whiteplayground.numberservice;

import java.util.Random;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin
public class NumberServiceApplication {

  @GetMapping("/")
  public int numberService() {
    Random random = new Random();
    return random.nextInt(100);
  }

  public static void main(String[] args) {
    SpringApplication.run(NumberServiceApplication.class, args);
  }
}
