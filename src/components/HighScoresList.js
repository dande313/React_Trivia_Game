import React from 'react';

const HighScoresList = ({ high_scores }) => {

  let top_scores = high_scores.sort(function(a, b){
  	let pointsA = a.points
  	let pointsB = b.points
  	if(pointsA < pointsB) return 1;
    if(pointsA > pointsB) return -1;
    return 0;
  });

  const renderHighScores = top_scores.slice(0, 5).map(high_score => 
    <tr key={high_score.id}>
	    <td>{high_score.email}</td>
	    <td>{high_score.points}</td>
    </tr>
  );
  
  return (
    <div>
    	<table className="High-score-table">
    		<tbody>
	    	   <tr>
				    <th>User</th>
				    <th>Score</th>
			    </tr>
		      	{renderHighScores}
	      	</tbody>
      	</table>
    </div>
  );
};

export default HighScoresList;