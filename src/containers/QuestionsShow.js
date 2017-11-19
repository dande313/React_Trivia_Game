import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionShow extends Component {
    constructor(props) {
        super(props);
        this.testing=this.testing.bind(this);
        this.timer=this.timer.bind(this);
        this.state = {response: "", currentCount: 5, timerOn: false, input: ""}
  }

  startCountdown(){
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId, timerOn: true});
  }

  timer(){
     var newCount = this.state.currentCount - 1;
     if(newCount >= 0) { 
         this.setState({ currentCount: newCount });
     } else {

         clearInterval(this.state.intervalId);
     }
  } 


  testing(e){
    if (this.state.currentCount === 5 && !this.state.timerOn){
      this.startCountdown();
    }

    let input = parseFloat(e.target.value) || "";
    console.log(input);
    console.log(this.props.question.answer);
    if (input < this.props.question.answer && this.state.currentCount !== 0){
      this.setState({response: "Too Low"})
    } else if (input > this.props.question.answer){
      this.setState({response: "Too High"})
    } else if (input === this.props.question.answer){
      this.setState({response: "Perfect", currentCount: 0})
    }

    if (this.state.currentCount === 0){
      e.preventDefault();
      e.target.type = "hidden";
      let finalAnswer = e.target.value;
      let solution = this.props.question.answer;
      let score = Math.round(((solution) - Math.abs(finalAnswer - solution))/(solution)*100);
      var key = "response"
      var obj = {};
      obj[key]= `score: ${score} points`
      this.setState(obj)
    }
  }



  render(){
    return(
     <div className="col-md-8">
        <h4>{this.props.question.difficulty}</h4>
        <p>{this.props.question.info}</p>
        <p>Time Remaining: {this.state.currentCount} seconds</p>
        <input 
            onChange={(e) => this.testing(e)}
          />
        <p>{this.state.response}</p>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let question = state.questions.find(question => question.id === +ownProps.match.params.questionId);
  return ((question) ? {question} : {question: {info: 'Invalid Question'}});
};





export default connect(mapStateToProps)(QuestionShow);
