import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/1'


export default class Question2 extends Component {

	 constructor(props) {
	     super(props);
	       this.state = {
	         error: null,
	         isLoaded: false,
	         selectedOption : false,
					 QuestionAnswer: [],
					 counter :0
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
		    this.props.history.push('/question3')
	}
	
	handleOptionChange = e => {
		if (e.target.checked) {
			console.log(e.target.value);
			if(e.target.value === this.state.answer )
			this.props.counter +=1;
		
		}
	
	};


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
						
							
        <input type="radio" value="West" 
                      checked={this.state.selectedOption}
                      onChange={this.handleOptionChange} />
        West
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="East" 
                      checked={this.state.selectedOption}
                      onChange={this.handleOptionChange} />
						East
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="North" 
                      checked={this.state.selectedOption}
                      onChange={this.handleOptionChange} />
						North
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="South" 
                      checked={this.state.selectedOption}
                      onChange={this.handleOptionChange} />
						South
				 
			
								 </div>

               <div className="Navigation">
 					<button type="submit" className="btn btn-primary" onClick={this.handleNext} >
		                Next
		      		</button>&nbsp;&nbsp;&nbsp;
		      		<button type="submit" className="btn btn-primary" onClick={this.handlePrevious} disabled>
			  	  			   		                Previous
		       		</button>
		       </div>
      </div>

    );
  }
}