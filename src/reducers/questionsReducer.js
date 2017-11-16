export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return action.questions;
    case 'ADD_QUESTION':
      const question = Object.assign({}, action.question, { id: state.length + 1} );
      return [ ...state, question ];
    default:
      return state;
  }
};
