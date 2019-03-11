import React, { Component } from "react";
import "./Home.css";

export default class Question1 extends Component {

  

 render() {

  
  var res ;

  var counter1 = parseInt(localStorage.getItem("counter1"));
  alert(counter1);
  var counter2 = parseInt(localStorage.getItem("counter2"));
  alert(counter2);

  var counter3 = parseInt(localStorage.getItem("counter3"));
  alert(counter3);
  var counter4 = parseInt(localStorage.getItem("counter4"));
  alert(counter4);
  var counter5 = parseInt(localStorage.getItem("counter5"));
  alert(counter5);
  var counter6 = parseInt(localStorage.getItem("counter6"));
  alert(counter6);
  var counter7 = parseInt(localStorage.getItem("counter7"));
  alert(counter7);
  var counter8 = parseInt(localStorage.getItem("counter8"));
  alert(counter8);
  var counter9 = parseInt(localStorage.getItem("counter9"));
  alert(counter9);
  var counter10 = parseInt(localStorage.getItem("counter10"));
  alert(counter10);
 var counterFinal = counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10;
 
  if(counterFinal > 8){
    res = "passed";
  }else{
    res  = "failed";
  }

  localStorage.clear();
    return (
      <div className="Question1">
        <div className="lander">
          <h1>Result</h1>
          <p>Thank you for participation.
            You have {res} this quiz.
          </p>
        </div>

      </div>
    );
  }
}