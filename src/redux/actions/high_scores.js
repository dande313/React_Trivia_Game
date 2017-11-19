export function fetchHighScores() {
  const high_scores = [
    {id: 1, email: 'test@aol.com', points: 1000},
    {id: 2, email: 'test@aol.com', points: 2500},
    {id: 3, email: 'test@aol.com', points: 2500},
    {id: 4, email: 'test@aol.com', points: 7500},
    {id: 5, email: 'test@aol.com', points: 3000},
    {id: 6, email: 'test@aol.com', points: 200},
    {id: 7, email: 'test@aol.com', points: 50}
  ];
  return {
    type: 'FETCH_HIGH_SCORES',
    high_scores
  };
}

export function addHighScore(high_score){
  return {
    type: 'ADD_HIGH_SCORE',
    high_score
  };
};
