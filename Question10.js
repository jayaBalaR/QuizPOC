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


					



		handleNext = (e) => {
			e.preventDefault();
		    this.props.history.push('/question11')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question9')
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
						
							
        <input type="radio" value="Charles Babbage" 
                      checked={this.state.selectedOption === 'Charles Babbage'} 
                      onChange={this.handleOptionChange} />
        Charles Babbage
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="Ronald Ross" 
													checked={this.state.selectedOption === 'Ronald Ross'} 
													onChange={this.handleOptionChange} />
						Ronald Ross
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Mickey Mouse" 
													checked={this.state.selectedOption === 'Mickey Mouse'} 
													onChange={this.handleOptionChange} />
						Mickey Mouse
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Donald Duck" 
													checked={this.state.selectedOption === 'Donald Duck'} 
													onChange={this.handleOptionChange} />
						Donald Duck
				 
			
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