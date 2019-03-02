package com.quiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class QuizzingApplication {

	private static final Logger logger = LoggerFactory.getLogger(QuizzingApplication.class);
	public static void main(String[] args) {
		logger.info("Entered the Application class...");
		SpringApplication.run(QuizzingApplication.class, args);
		logger.info("Exited the Application class...");
	}

}
