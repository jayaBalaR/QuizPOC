import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/9'


export default class Question10 extends Component {

	 constructor(props) {
	     super(props);
	       this.state = {
	         error: null,
	         isLoaded: false,
	         selectedRadio: 'public',
	         QuestionAnswer: []
    		};
	   }



	     componentDidMount() {
	      fetch(url)
		   	    .then((response) => {
			        console.log(response);
			     return response.json();
			    })
			    .then((json) => {
			      this.setState({
			        qid: json.qid,
			        qtext: json.qtext,
			        point: json.marks,
			        ans: json.answer,
			        choices:json.options
			      });
    });
						 }

						 
						 


	           // Note: it's important to handle errors here
	           // instead of a catch() block so that we don't swallow
	           // exceptions from actual bugs in components.

			   handleChange =(e) =>{
	
				this.setState({
					  selectedOption : e.target.value
			  
				  });
				}
					



		handleNext = (e) => {
			e.preventDefault();
			if(this.state.selectedOption === this.state.ans){
				localStorage.setItem("counter9","1");
			}
		    this.props.history.push('/question11')
  }

  handlePrevious = (e) => {
	e.preventDefault();
	if(this.state.selectedOption === this.state.ans){
		localStorage.setItem("counter9","1");
	}else{
		localStorage.setItem("counter9","0");
	}
      this.props.history.push('/question9')
}


 render() {

  const { qid , qtext,point, ans ,choices} = this.state;


  const data = {
	option:["Charles Babbage","Ronald Ross","Mickey Mouse","Donald Duck"]
	};
	
	const RadioButtons = props => {
	const { names } = props;
	return (
	 <div>
	 {names.map(n => (
		 <Radio name={n} />
	 ))}
	 </div>
	);
	};
	
	const Radio = props => {
	const { name } = props;
	return (
	 <div>
	 <input id={name} type="radio" name="type" value={name} checked={this.state.selectedOption === name } onClick={this.handleChange.bind(this)} />
	 <label for={name}>{name}</label>
	 </div>
	);
	};

 






    return (
         <div className="q2">

				<div className="labels">
							<label for="test">{this.state.qid} {this.state.qtext}</label>
       			</div>
       		
				   <div className="App">
		 <RadioButtons names={data.option} />
	 </div>	
               <div className="Navigation">
 					<button type="submit" className="btn btn-primary" onClick={this.handleNext} >
		                Next
		      		</button>&nbsp;&nbsp;&nbsp;
		      		<button type="submit" className="btn btn-primary" onClick={this.handlePrevious} >
			  	  			   		                Previous
		       		</button>
		       </div>
      </div>

    );
  }
}