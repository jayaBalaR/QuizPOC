import React, { Component } from "react";
import "./Home.css";

export default class Question1 extends Component {

  

 render() {

  const counterFinal = this.props.counter;
  var res ;
  

  if(counterFinal > 8){
    res = "passed";
  }else{
    res  = "failed";
  }
    return (
      <div className="Question1">
        <div className="lander">
          <h1>Result</h1>
          <p>Thank you for participation.
            You have {res} this quiz
          </p>
        </div>

      </div>
    );
  }
}