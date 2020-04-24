//useffect
import React, { useState, useEffect } from 'react';
import api from './services/api';

import { Header } from './components/Header'
import './App.css';
import backgroundImage from './assets/background.jpg';

//array vazia, ou obj
function App() {
    //const [projects, setProjects] = useState(['hshss', 'jsjsj']);
    const [projects, setProjects] = useState([]); 
    //2params
    useEffect(() => {
        api.get('projects').then(response => {
            //console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    async function handlerAddProject() {
        //projects.push(`novo projeto ${Date.now()}`);
       // setProjects([...projects, `novo projeto ${Date.now()}`]);
       const ownerd = document.getElementById('input').value;
       console.log(ownerd);

       const response = await api.post('projects', {
           title:  `novo projeto n${Date.now()}`,
           owner: ownerd});

        const project = response.data;
        
        setProjects([...projects, project] );
    }

   


    return (
        <>
            <Header title="Listando Projetos da API" />
            <img width={100} src={backgroundImage}/>
            <div id="projects">
            <ul>
            {/* {projects.map(project => <li key={project}>{project}</li>)} */}
                {projects.map(project => <li key={project.id}>{project.title} - {project.owner}</li>)}
            </ul>
            <input type="text" id="input"  placeholder="Digite o author do projeto"/>
            <button type="button" onClick={handlerAddProject}>Adicionar projeto</button>
            </div>
        </>
    );

}

export default App;