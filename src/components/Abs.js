import React, { useEffect, useState } from 'react';


const Abs = () => {
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
            <img src={require("../assets/default-abs.png")} style={{
                width: "500px",
                height: "600px",
                display: "inline",
                zIndex: "-1",
                

            }} />
            
            {/* epigastrium */}
            <button onClick={() => allhighlight("epigastrium")} style={{width:"55px", height: "55px", position:"absolute" ,left:"264px",  top:"345px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/epigastrium-highlight.png")} alt="abs" style={(position === "allabs" || position === "epigastrium")   ?  showstyle : hidestyle} />
            <img src={require("../assets/epigastrium-active.png")} alt="abs" style={position === "epigastrium" ?  showstyle : hidestyle} />

            {/* umbilicus */}
            <button onClick={() => allhighlight("umbilicus")} style={{width:"50px", height: "50px", position:"absolute" ,left:"266px",  top:"420px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/umbilicus-highlight.png")} alt="abs" style={(position === "allabs" || position === "umbilicus")   ?  showstyle : hidestyle} />
            <img src={require("../assets/umbilicus-active.png")} alt="abs" style={position === "umbilicus" ?  showstyle : hidestyle} />

            {/* suprapubic */}
            <button onClick={() => allhighlight("suprapubic")} style={{width:"55px", height: "55px", position:"absolute" ,left:"265px",  bottom:"260px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/suprapubic-highlight.png")} alt="abs" style={(position === "allabs" || position === "suprapubic")   ?  showstyle : hidestyle} />
            <img src={require("../assets/suprapubic-active.png")} alt="abs" style={position === "suprapubic" ?  showstyle : hidestyle} />

            {/* ruq */}
            <button onClick={() => allhighlight("ruq")} style={{width:"55px", height: "55px", position:"absolute" ,left:"215px",  top:"384px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/ruq-highlight.png")} alt="abs"style={(position === "allabs" || position === "ruq")   ?  showstyle : hidestyle} />
            <img src={require("../assets/ruq-active.png")} alt="abs"  style={position === "ruq" ?  showstyle : hidestyle} />


            {/* luq */}
            <button onClick={() => allhighlight("luq")} style={{width:"55px", height: "55px", position:"absolute" ,right:"233px", top:"384px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/luq-highlight.png")} alt="abs"  style={(position === "allabs" || position === "luq")   ?  showstyle : hidestyle} />
            <img src={require("../assets/luq-active.png")} alt="abs"  style={position === "luq" ?  showstyle : hidestyle} />

            {/* rlq */}
            <button onClick={() => allhighlight("rlq")} style={{width:"55px", height: "55px", position:"absolute" ,left:"213px", bottom:"294px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
            <img src={require("../assets/rlq-highlight.png")} alt="abs" style={(position === "allabs" || position === "rlq")   ?  showstyle : hidestyle} />
            <img src={require("../assets/rlq-active.png")} alt="abs"  style={position === "rlq" ?  showstyle : hidestyle} />

             {/* llq */}
             <button onClick={() => allhighlight("llq")} style={{width:"55px", height: "55px", position:"absolute" , right:"230px", bottom:"294px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '50%'}}/>
             <img src={require("../assets/llq-highlight.png")} alt="abs" style={(position === "allabs" || position === "llq")   ?  showstyle : hidestyle} />
            <img src={require("../assets/llq-active.png")} alt="abs" style={position === "llq" ?  showstyle : hidestyle} />

            <button onClick={() => allhighlight("allabs")} style={{width:"160px", height: "50px", position:"absolute" , left:"210px", bottom:"97px", cursor:"pointer", zIndex:2, opacity: 0, borderRadius: '20px'}} />
            <img src={require("../assets/all-over-highlight.png")} alt="abs" style={position === "allabs" ?  showstyle : hidestyle} />
            
            
            
        </div>
    )


}

export default Abs;