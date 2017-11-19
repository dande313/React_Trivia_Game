import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import questions from './reducers/questions';
import high_scores from './reducers/high_scores';

const reducers = combineReducers({
  auth,
  questions,
  high_scores
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)