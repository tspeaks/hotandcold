import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
<<<<<<< HEAD
      <TopNav />
=======
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
      <h1>HOT or COLD</h1>
    </header>
  );
}
