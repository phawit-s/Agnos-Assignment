import React from 'react';

const Button = ({nextpage, buttontext}) =>{
    return(
        <div className="buttonbox" onClick={nextpage}>{buttontext}</div>
    )
}

export default Button;