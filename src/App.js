import React, { useState, useEffect } from 'react';

import './App.css';
import backgound from './assets/background.jpeg';

import api from './services/api';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [])
 
  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`])

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Vinícius Mendite'
    });

    const project = response.data;

    setProjects([...projects, project])
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
      <img width={300} src={backgound} alt=""/>
        <ul>
          { projects.map(project => <li key={project.id}>{project.title}</li>) }
        </ul>
        <button type="button" onClick={handleAddProject}>Add new project</button>
      </Header>
    </>
  );
}

export default App;