import React, { useState } from 'react';
import { Header } from './components/Header'
import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
    const [projects, setProjects] = useState(['projeto 1', 'projeto 2']);
    
    function handlerAddProject() {
        //projects.push(`novo projeto ${Date.now()}`);
        setProjects([...projects, `novo projeto ${Date.now()}`]);
    }


    return (
        <>
            <Header title="propriedades">
                <ul>
                    <li>home</li>
                    <li>projetos</li>
                </ul>
            </Header>
            <Header title="menu" >
                <ul>
                    <li>home</li>
                    <li>projetos</li>
                    <li>login</li>
                </ul>
            </Header>
            <Header title="componentes" />
            <img width={300} src={backgroundImage}/>
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handlerAddProject}>adicionar projeto</button>
        </>
    );

}

export default App;