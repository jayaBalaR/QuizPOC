import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import AnswerOption from './AnswerOptions';
import "./Home.css";

const url = 'http://localhost:8085/qbank/qas/10'


export default class Question10 extends Component {

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


					



		handleNext = (e) => {
      e.preventDefault();
      this.props.push(counter);
		    this.props.history.push('/Result')
  }

  handlePrevious = (e) => {
    e.preventDefault();
      this.props.history.push('/question10')
}

handleOptionChange = e => {
  if (e.target.checked) {
    console.log(e.target.value);
    this.state.selectedOption=true;
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
						
							
        <input type="radio" value="Ramakrishna Paramahamsa" 
                      checked={this.state.selectedOption}
                      onChange={this.handleOptionChange} />
        Ramakrishna Paramahamsa
     
	
       			</div>
						 <div>
						
							
						<input type="radio" value="H.D. Kumaraswamy" 
													checked={this.state.selectedOption}
													onChange={this.handleOptionChange} />
						H.D. Kumaraswamy
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="Mahatma Gandhi" 
													checked={this.state.selectedOption} 
													onChange={this.handleOptionChange} />
						Mahatma Gandhi
				 
			
								 </div>
								 <div>
						
							
						<input type="radio" value="M.K.Stalin" 
													checked={this.state.selectedOption} 
													onChange={this.handleOptionChange} />
						M.K.Stalin
				 
			
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