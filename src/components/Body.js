import React from 'react';
import Finger from './Finger';
import Abs from './Abs';
const Body = ({picture}) =>{
    if(picture == "ABS"){
        return(
            <Abs/>
        )
    }else{
        return(
            <Finger/>
        )
        
    }
    
}

export default Body;