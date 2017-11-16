import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import QuestionsPage from '../containers/QuestionsPage';

const App = (props) => 
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/questions">View All</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/questions/new">Add Question</NavLink>
      </div>
      <Route exact path="/" render={() => <h3>Wild Numbers</h3>} />
      <Route path="/questions" component={QuestionsPage} />
    </div>
  </Router>;

export default App;