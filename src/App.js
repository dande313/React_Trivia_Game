import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import HomePage from './containers/HomePage'
import QuestionsPage from './containers/QuestionsPage';
import HighScoresPage from './containers/HighScoresPage';
import './App.css';

const App = (props) => 
  <Router>
    <div>
      <div className="navbar">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/questions">View All</NavLink>
        <NavLink className="nav-link" to="/questions/new">Add Question</NavLink>
        <NavLink className="nav-link" to="/high-scores">High Scores</NavLink>
      </div>
      <div className="title">
        <h1 className="Wild-Numbers">Wild Numbers</h1>
        <p className="catch-line">You're close enough...</p>
      </div>


      <Route exact path="/" component={HomePage} />
      <Route path="/questions" component={QuestionsPage} />
      <Route path="/high-scores" component={HighScoresPage} />
    </div>
  </Router>;

export default App;