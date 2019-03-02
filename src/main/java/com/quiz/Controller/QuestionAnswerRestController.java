package com.quiz.Controller;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.QuestionAnswer;
import com.quiz.repositories.QuestionAnswerRepository;

@RestController
@RequestMapping("/qbank")
@CrossOrigin("*")
public class QuestionAnswerRestController {
	private static final Logger logger = LoggerFactory.getLogger(QuestionAnswerRestController.class);
	 @Autowired
	  private QuestionAnswerRepository repository;
	 
	 @GetMapping("/qas")
	    public List<QuestionAnswer> getAllQuestionAnswer() {
	        Sort sortByqid = new Sort(Sort.Direction.ASC, "qid");
	        logger.info("qid:"+sortByqid);
	        return repository.findAll(sortByqid);
	    }
	 
	 
	  @GetMapping(value="/qas/{qid}")
	    public ResponseEntity<QuestionAnswer> getQuestionAnswersById(@PathVariable("qid") Integer qid) {
	        return repository.findById(qid)
	                .map(questans -> ResponseEntity.ok().body(questans))
	                .orElse(ResponseEntity.notFound().build());
	    }
	  
	  @PostMapping("/qas")
	    public QuestionAnswer createQA(@Valid @RequestBody QuestionAnswer question) {
		  
	        return repository.save(question);
	    }





}
