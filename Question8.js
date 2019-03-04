import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/7'


export default class Question8 extends Component {

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


					



		handleNext = (e) => {
			e.preventDefault();
		    this.props.history.push('/question9')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question8')
}


 render() {

  const { qid , qtext,point, ans ,choices} = this.state;


  
 


const replies = this.state.choices;
//const listItems = replies.map((number) =>
//  {number}
//);


var names = this.state.choices;



    return (
         <div className="q2">

				<div className="labels">
							<label for="test">{this.state.qid} {this.state.qtext}</label>
       			</div>
       			<div>
						
							
        <input type="radio" value="Alexander Graham Bell" 
                      checked={this.state.selectedOption === 'Alexander Graham Bell'} 
                      onChange={this.handleOptionChange} />
        Alexander Graham Bell
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="Christopher Columbus" 
													checked={this.state.selectedOption === 'Christopher Columbus'} 
													onChange={this.handleOptionChange} />
						Christopher Columbus
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Napoleon Bonaparte" 
													checked={this.state.selectedOption === 'Napoleon Bonaparte'} 
													onChange={this.handleOptionChange} />
						Napoleon Bonaparte
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="George W Bush" 
													checked={this.state.selectedOption === 'George W Bush'} 
													onChange={this.handleOptionChange} />
						George W Bush
				 
			
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