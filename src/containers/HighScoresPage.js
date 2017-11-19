import React, { Component } from 'react';
import { connect } from 'react-redux';
import HighScoresList from '../components/HighScoresList';
import { fetchHighScores } from '../redux/actions/high_scores';

class HighScoresPage extends Component {

  componentDidMount() {
    this.props.fetchHighScores();
  }

  render() {
    const { match, high_scores } = this.props;

    return (
      <div>
        <HighScoresList high_scores={high_scores} />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    high_scores: state.high_scores
  };
}

export default connect(mapStateToProps, { fetchHighScores })(HighScoresPage);