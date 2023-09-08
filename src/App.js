import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MarkdownGuide from './components/MarkdownGuide/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput/MarkdownOutput';

const Container = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 20px;
`;
function App() {


  const [markdown, setMarkdown] = useState('# Hello World');
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };
  return (
    <div>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </div>
  );
}

export default App;
