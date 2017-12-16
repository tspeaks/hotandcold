import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
=======

import './guess-count.css';

export default function GuessCount(props) {
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
<<<<<<< HEAD

const mapStateToProps = state => ({
    guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
=======
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
