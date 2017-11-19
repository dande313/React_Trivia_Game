import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
      	<h1>How it's done:</h1>
      	<ul>
      		<li>Click on "Play" to begin</li>
      		<li>You'll be taken through 10 Trivia Questions; Questions you don't know the answers to.</li>
      		<li>Start off by taking a lucky guess. Enter a number into the guess box.</li>
      		<li>We'll tell you if you're too high or too low.</li>
      		<li>You're welcome to adjust as many times as you'd like, within 20 seconds.</li>
      		<li>Once the time is up, your score will be recorded. It all depends how close you got. 100 means you're spot on. 1 means you're 99% away. We won't let you go beneath 0.</li>
      		<li>Hit "next" to continue.</li>
      		<li>Once you're done, feel free to submit your score to the board!</li>
      	</ul>
      	<NavLink className="play-link" to="/play">Play</NavLink>
      </div>
    )
  }
};

export default (HomePage);