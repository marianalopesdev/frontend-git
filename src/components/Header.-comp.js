
import React from 'react';

export function Header ({ title, children }) {
//export function Header (props) {
    return(
<header>
<h1>{title}</h1>
    {/* <h1>{props.title}</h1> */}
   { children } 
</header>
    );
}

//Componente
//Propriedade
//informacao q pode ser passada de um componente pai pra filho

//Estado