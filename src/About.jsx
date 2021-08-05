import React from "react";
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';
import web from '../src/images/img2.png';

const About = () => {
    return (
        <> 
           <Common
            name='Welcome to about page' 
           imgsrc={web}
           bold='Hola!'
            visit="/contact"
             btnname='Contact Now'

             />
             
        </>
    )
}
export default About