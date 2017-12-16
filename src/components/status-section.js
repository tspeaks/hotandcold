import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

export default function StatusSection(props) {
<<<<<<< HEAD

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount />
      <GuessList />
      <AuralStatus />
=======
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
    </section>
  );
}
