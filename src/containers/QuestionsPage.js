import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchQuestions } from '../redux/actions/questions';
import QuestionsNew from './QuestionsNew';
import QuestionsShow from './QuestionsShow';
import QuestionsList from '../components/QuestionList';

class QuestionsPage extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { match, questions } = this.props;

    return (
      <div>
        <QuestionsList questions={questions} />
        <Switch>
        <Route path={`${match.url}/new`} component={QuestionsNew}/>
        <Route path={`${match.url}/:questionId`} component={QuestionsShow}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps, { fetchQuestions })(QuestionsPage);
