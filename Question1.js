import React, { Component } from "react";

import "./Home.css";


export default class Question1 extends Component {

		handleSubmit = (e) => {
			e.preventDefault();
	    this.props.history.push('/question2')
  }
 render() {
    return (
      <div className="Question1">
        <div className="lander">
          <h1>Quiz</h1>
          <p>This is a general Knowledge assesment test.Answer all the questions.
          There is no negative marking.You need 80 marks to pass the test
          </p>
        </div>
          <div className="Login">
			 <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >
		                Agree
		       </button>
      </div>
      </div>
    );
  }
}