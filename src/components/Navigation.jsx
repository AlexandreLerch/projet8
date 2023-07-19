import React from 'react';
// import { Anchor } from 'antd';
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
    <ul>
      <li><a href="#about">A propos</a></li>
      <li><a href="#competences">Compétences</a></li>
      <li><a href="#travaux">Travaux</a></li>
    </ul>
  </nav>
  );
};

export default Navigation;
