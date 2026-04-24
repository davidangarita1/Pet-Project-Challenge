import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Footer = () => {
    return (
        <div className='footerPage text-center'>
           &copy; 2022 - 
           David H. Angarita - 
           Reto Sofka sobre preguntas y respuestas - 
           Hecho con 
           ReactJs <FaIcons.FaReact /> , 
           SpringBoot <SiIcons.SiSpringsecurity/> - 
           Metodologia de Programación <FaIcons.FaCode /> Funcional Reactiva
        </div>
    )
}

export default Footer
