import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/5'


export default class Question6 extends Component {

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
		    this.props.history.push('/question7')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question5')
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
						
							
        <input type="radio" value="Cuttack" 
                      checked={this.state.selectedOption === 'Cuttack'} 
                      onChange={this.handleOptionChange} />
        Cuttack
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="Madras" 
													checked={this.state.selectedOption === 'Madras'} 
													onChange={this.handleOptionChange} />
						Madras
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Hyderabad" 
													checked={this.state.selectedOption === 'Hyderabad'} 
													onChange={this.handleOptionChange} />
						Hyderabad
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Mumbai" 
													checked={this.state.selectedOption === 'Mumbai'} 
													onChange={this.handleOptionChange} />
						Mumbai
				 
			
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