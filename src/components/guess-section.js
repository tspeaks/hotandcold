import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
<<<<<<< HEAD
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
=======
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
    </section>
  );
}
