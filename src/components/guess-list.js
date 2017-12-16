import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
=======

import './guess-list.css';

export default function GuessList(props) {
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
<<<<<<< HEAD

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);
=======
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
