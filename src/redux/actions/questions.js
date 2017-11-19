export function fetchQuestions() {
  const questions = [
    {id: 1, info: `The world's oldest Dog, "Bluey", was an Australian Cattle Dog, who lived in Victoria, Australia. She was born in 1910. How many years old was Bluey when he died?`, answer: '29', difficulty: 'Easy'},
    {id: 2, info: 'New York City consumes a lot of electricity on a daily basis, and even more during the peak of summer. How much electricity does the entire city consume, in megawatts, on an average summer day? (rounded to two significant figures)', answer: '11000', difficulty: 'Medium'},
    {id: 3, info: `"VY Canis Majoris" is one of the largest stars in our solar system. How many earth moons could fit into VY Canis Majoris? (rounded to three significant figures)`, answer: '598000000000000000', difficulty: 'Hard'}
  ];
  return {
    type: 'FETCH_QUESTIONS',
    questions
  };
}

export function addQuestion(question){
  return {
    type: 'ADD_QUESTION',
    question
  };
};
