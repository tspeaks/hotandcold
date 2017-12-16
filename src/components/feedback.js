import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';

import './feedback.css';

export function Feedback(props) {
  /** 
   * Below, we'll the guessCount to generate a key so that React treats the feedback message 
=======

import './feedback.css';

export default function Feedback(props) {
  /** 
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message 
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
  const key = props.guessCount;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }
  return (
    <h2 
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}
<<<<<<< HEAD

const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
=======
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
