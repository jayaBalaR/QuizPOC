package com.quiz.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.quiz.QuizzingApplication;

@Document(collection="quiz")
@JsonIgnoreProperties(value = {"_id","optionList"})
public class QuestionAnswer {

	private static final Logger logger = LoggerFactory.getLogger(QuestionAnswer.class);

	
	
	public ObjectId _id;
	
	@Id
	public int qid;
	public String qtext;
	public String marks;
	@Override
	public String toString() {
		return "QuestionAnswer [qid=" + qid + ", qtext=" + qtext + ", marks=" + marks + ", answer=" + answer
				+ ", options=" + options + "]";
	}

	public String answer;

	public List<String> options;

	// Constructor
	public QuestionAnswer() {

	}

	// Constructor
	public QuestionAnswer( int qid, String qtext, String marks, String answer,
			List<String> options) {

		
		this.qid = qid;
		this.qtext = qtext;
		this.marks = marks;
		this.answer = answer;
		this. options= options;
	}

	/*
	 * public ObjectId get_id() { return _id; }
	 * 
	 * public void set_id(ObjectId _id) { this._id = _id; }
	 */

	 public int getQid() {logger.info("Inside get..."+qid); return qid; }
	public void setQid(int qid) { this.qid = qid; }
	 

	public String getQtext() {
		return qtext;
	}

	public void setQtext(String qtext) {
		this.qtext = qtext;
	}

	public String getMarks() {
		return marks;
	}

	public void setMarks(String marks) {
		this.marks = marks;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public List<String> getOptions() {
		logger.info("options:"+options);
		return options;
	}

	public void setOptions(List<String> options) {
		this.options = options;
	}

}
