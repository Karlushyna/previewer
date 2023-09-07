import React from 'react';
import './Header.css';

function Header({ onToggleGuide }) {
  return (
    <div className="header-container">
      <h1 className="title">Markdown Editor</h1>
      <button className="button" onClick={onToggleGuide}>
        Toggle Guide
      </button>
    </div>
  );
}

export default Header;
