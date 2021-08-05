import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from '../src/images/img1.png';
import Common from "./Common";

const Home = () => {
    return (
        <> 
          <Common
               name='Make your event more' 
           imgsrc={web}
           bold='Elegent'
            visit="/service"
             btnname='Register now'
                 
          />
             
        </>
    )
}
export default Home