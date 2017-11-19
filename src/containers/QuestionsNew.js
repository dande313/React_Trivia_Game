import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../redux/actions/questions';

class QuestionsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addQuestion, history } = this.props
    addQuestion(this.state);
    history.push('/questions');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Question</h2>
        <form onSubmit={this.handleOnSubmit} >
          <textarea
            placeholder="Question"
            name="info"
            onChange={this.handleOnChange} /><br/>
          <input
            type="text"
            placeholder="Answer"
            name="answer"
            onChange={this.handleOnChange} /><br/><br/>
          <label>Difficuly</label><br/>
          <select name="difficulty">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select> 
          <button>Submit</button>
        </form>
        <br/>
        <p> Instructions: </p>
        <ul>
          <li> All questions must have a whole numerical answer. No text, decimals, fractions, equations, or other punctuation allowed.</li>
          <li> Please select an appropriate difficulty for the question. For reference, a two digit answer would be easy. A sixteen digit answer would be hard.</li>
          <li> The point of the question is not to ask a trivia question someone may know the answer to. Rather, we are seeing how well they can estimate and adjust their answer in the given time.</li>
          <li> Remember, all players will be allowed 15 seconds to come up with the correct answer, and will be scored based on how close they were when the time expires.</li>
        </ul>
      </div>
    );
  }
};

export default connect(null, { addQuestion })(QuestionsNew);
