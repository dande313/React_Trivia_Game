import React from 'react';
import { connect } from 'react-redux';

const QuestionsShow = ({ question }) =>
  <div className="col-md-8">
  	<h4>{question.difficulty}</h4>
    <p>{question.info}</p>
    <p>{question.answer}</p>
    <input 
        onChange={console.log("yay!")}
    	/>
  </div>;

const analyzeAnswer = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            alert("please enter numbers only");
        }
    }
    console.log(this)
    this.setState({ answer: newText });

}

const mapStateToProps = (state, ownProps) => {
  let question = state.questions.find(question => question.id === +ownProps.match.params.questionId);
  return ((question) ? {question} : {question: {info: 'Invalid Question'}});
};





export default connect(mapStateToProps)(QuestionsShow);
