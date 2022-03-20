import React, { useEffect, useState } from 'react';

const Finger = () => {
    const [position, setPostion] = useState("")
    const allhighlight = (nameposition) => {
        setPostion(nameposition);
    }
    const hidestyle = {
        width: "500px",
        height: "600px",
        position: "absolute",
        right: "50px",
        opacity:0,
        
    };

    const showstyle = {
        width: "500px",
        height: "600px",
        position: "absolute",
        right: "50px",
        
    };


    return (
        <div>
            <img src={require("../picture/default-finger.png")} style={{
                width: "500px",
                height: "600px",
                display: "inline",
                zIndex:-1,
            }} />
            

            {/* dip */}
            <button onClick={() => allhighlight("dip")} style={{width:"40px", height: "30px", position:"absolute" , left:"320px", top:"190px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("dip")} style={{width:"35px", height: "25px", position:"absolute" , left:"265px", top:"180px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("dip")} style={{width:"35px", height: "25px", position:"absolute" , left:"213px", top:"205px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("dip")} style={{width:"30px", height: "25px", position:"absolute" , left:"150px", top:"270px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />

            <img src={require("../picture/dip-highlight.png")} alt="abs" onClick={() => allhighlight("dip")} style={(position === "others" || position === "dip")   ?  showstyle : hidestyle} />
            <img src={require("../picture/dip-active.png")} alt="abs" style={position === "dip" ?  showstyle : hidestyle} />

            {/* pip */}
            <button onClick={() => allhighlight("pip")} style={{width:"40px", height: "30px", position:"absolute" , left:"320px", top:"250px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("pip")} style={{width:"40px", height: "30px", position:"absolute" , left:"270px", top:"245px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("pip")} style={{width:"35px", height: "25px", position:"absolute" , left:"216px", top:"270px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("pip")} style={{width:"30px", height: "25px", position:"absolute" , left:"170px", top:"314px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("pip")} style={{width:"40px", height: "30px", position:"absolute" , left:"430px", top:"370px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />

            <img src={require("../picture/pip-highlight.png")} alt="abs" onClick={() => allhighlight("pip")} style={(position === "others" || position === "pip")   ?  showstyle : hidestyle} />
            <img src={require("../picture/pip-active.png")} alt="abs" style={position === "pip" ?  showstyle : hidestyle} />

            {/* mcp-highlight */}
            <button onClick={() => allhighlight("mcp")} style={{width:"45px", height: "30px", position:"absolute" , left:"320px", top:"335px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("mcp")} style={{width:"45px", height: "30px", position:"absolute" , left:"270px", top:"335px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("mcp")} style={{width:"45px", height: "30px", position:"absolute" , left:"225px", top:"347px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("mcp")} style={{width:"45px", height: "30px", position:"absolute" , left:"185px", top:"370px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <button onClick={() => allhighlight("mcp")} style={{width:"45px", height: "30px", position:"absolute" , left:"390px", top:"440px", cursor:"pointer", zIndex:2, opacity: 0 ,borderRadius: '40px'}} />
            <img src={require("../picture/mcp-highlight.png")} alt="abs" onClick={() => allhighlight("mcp")} style={(position === "others" || position === "mcp")   ?  showstyle : hidestyle} />
            <img src={require("../picture/mcp-active.png")} alt="abs" style={position === "mcp" ?  showstyle : hidestyle} />
            
            {/* highlight all */}
            <button onClick={() => allhighlight("others")} style={{width:"350px", height: "50px", position:"absolute" , left:"120px", bottom:"80px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '20px'}} />
            <img src={require("../picture/others-highlight.png")} alt="abs"  style={position === "others" ?  showstyle : hidestyle} />
            
        </div>
    )
}

export default Finger;