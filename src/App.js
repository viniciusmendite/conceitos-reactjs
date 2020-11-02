import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Header>
      <Header title="projects">
        <ul>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </Header>
    </>
  );
}

export default App;