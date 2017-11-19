export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_HIGH_SCORES':
      return action.high_scores;
    case 'ADD_HIGH_SCORE':
      const high_score = Object.assign({}, action.high_score, { id: state.length + 1} );
      return [ ...state, high_score ];
    default:
      return state;
  }
};