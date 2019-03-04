import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/3'


export default class Question4 extends Component {

	 constructor(props) {
	     super(props);
	       this.state = {
	         error: null,
	         isLoaded: false,
	         selectedOption: false,
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


					

             handleOptionChange = e => {
              if (e.target.checked) {
                console.log(e.target.value);
                this.selectedOption = true;
              
              }
            
            };

		handleNext = (e) => {
			e.preventDefault();
		    this.props.history.push('/question5')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question3')
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
						
							
        <input type="radio" value="Microsoft" 
                      checked={this.selectedOption} 
                      onChange={this.handleOptionChange} />
        Microsoft
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="Google" 
													checked={this.state.selectedOption} 
													onChange={this.handleOptionChange} />
						Google
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Facebook" 
													checked={this.state.selectedOption} 
													onChange={this.handleOptionChange} />
						Facebook
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Yahoo" 
													checked={this.state.selectedOption} 
													onChange={this.handleOptionChange} />
						Yahoo
				 
			
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