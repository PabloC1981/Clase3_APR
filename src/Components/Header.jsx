
import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <div className="logo">

          <img src="https://www.65ymas.com/uploads/s1/13/85/39/8/bigstock-ai-artificial-intelligence-sm-475465473_1_621x621.jpeg" alt="Logo" />
        </div>
        <div className="solution-ia">
          <p>Solution IA</p>
        </div>
      </div>
      <div className="navbar">
        <a href="#" className="login">
          Login
        </a>
        <div className="cart">

          🛒
        </div>
      </div>
    </header>
  );
};

export default Header;


