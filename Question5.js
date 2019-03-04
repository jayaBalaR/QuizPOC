import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/4'


export default class Question5 extends Component {

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
		    this.props.history.push('/question6')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question4')
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
						
							
        <input type="radio" value="R" 
                      checked={this.state.selectedOption === 'R'} 
                      onChange={this.handleOptionChange} />
        R
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="Python" 
													checked={this.state.selectedOption === 'Python'} 
													onChange={this.handleOptionChange} />
						Python
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Matlab" 
													checked={this.state.selectedOption === 'Matlab'} 
													onChange={this.handleOptionChange} />
						Matlab
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Scala" 
													checked={this.state.selectedOption === 'Scala'} 
													onChange={this.handleOptionChange} />
						Scala
				 
			
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