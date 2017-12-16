import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';

import {generateAuralUpdate, restartGame} from '../actions';

import './top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a href="#what" className="what" aria-label="How to play">
                        What?
                    </a>
                </li>
                <li>
                    <a
                        href="#feedback"
                        className="new"
                        aria-label="Start a new game"
                        onClick={() =>
                            props.dispatch(
                                restartGame(Math.floor(Math.random() * 100) + 1)
                            )}>
                        + New Game
                    </a>
                </li>
                <li>
                    <a
                        href="#get-status"
                        /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
                        className="visuallyhidden focusable status-link"
                        onClick={() => props.dispatch(generateAuralUpdate())}>
                        Hear state of game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);
=======

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestartGame()}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
