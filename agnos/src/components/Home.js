import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Body from "./Body";

function Home() {
    const [title, setTitle] = useState(true);
    const [picture, setPicture] = useState(true);
    const [buttontext, setButtontext] = useState(true);
    const nextpage = ()=>{
        setTitle(!title)
        setButtontext(!buttontext)
        setPicture(!picture)
        
    }
    return (
        <div className="container">
            <div className="box">
                <Header title={title ? "ปวดท้องที่บริเวณใดมากที่สุด?" : "จุดไหนที่คุณปวดนิ้วมากที่สุด?"}/>
                <Body className="picturebox" picture={picture ? "ABS":"Finger"}/>
            </div>
            <Button nextpage={nextpage} buttontext={buttontext ? "ต่อไป" : "ย้อนกลับ"}/>
        </div>
      
    );
  }
  
  export default Home;
  