// MarkdownGuide.js
import React from 'react';
import './MarkdownGuide.css';

function MarkdownGuide() {
  return (
    <div className="guide-container">
      <h2>Markdown Guide</h2>
      <ul>
        <li>
          <code># Heading 1</code>
        </li>
        <li>
          <code>**Bold Text**</code>
        </li>
        {/* Add more Markdown syntaxes */}
      </ul>
    </div>
  );
}

export default MarkdownGuide;
