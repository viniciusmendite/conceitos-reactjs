import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          { projects.map(project => <li key={project}>{project}</li>) }
        </ul>
        <button type="button" onClick={handleAddProject}>Add new project</button>
      </Header>

    </>
  );
}

export default App;