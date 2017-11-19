import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionShow extends Component {
    constructor(props) {
        super(props);
        this.testing=this.testing.bind(this);
        this.state = {response: ""}
  }

  testing(e){
    let input = parseFloat(e.target.value) || "";
    console.log(input);
    if (input < this.props.question.answer){
      this.setState({response: "Too Low"})
    } else if (input > this.props.question.answer){
      this.setState({response: "Too High"})
    } else if (input = this.props.question.answer){
      this.setState({response: "Perfect"})
    }

  }


  render(){
    console.log(this.props)
    return(
     <div className="col-md-8">
        <h4>{this.props.question.difficulty}</h4>
        <p>{this.props.question.info}</p>
        <p>{this.props.question.answer}</p>
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
