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
       const response = await api.post('projects', {
           title:  `novo projeto ${Date.now()}`,
           owner: "onwer"});

        const project = response.data;
        
        setProjects([...projects, project] );
    }


    return (
        <>
            <Header title="Listando Projetos da API" />
            <img width={300} src={backgroundImage}/>
            <ul>
            {/* {projects.map(project => <li key={project}>{project}</li>)} */}
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handlerAddProject}>Adicionar projeto</button>
        </>
    );

}

export default App;