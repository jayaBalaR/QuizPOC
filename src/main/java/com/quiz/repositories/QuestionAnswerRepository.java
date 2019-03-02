package com.quiz.repositories;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.quiz.model.QuestionAnswer;



@RepositoryRestResource(collectionResourceRel = "qbank", path = "qbank")
	public interface QuestionAnswerRepository extends MongoRepository<QuestionAnswer, Integer> {
//		  QuestionAnswer findBy_id(String qid);
		  
//		  List<QuestionAnswer> findByQuestionAnswers(@Param("qid") String qid);
		}

