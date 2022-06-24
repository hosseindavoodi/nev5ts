import React, { useEffect, useState } from "react";

import "./style/tailwind.output.css";
import "./style/style.css" 

type resultProps = {
  id: number;
  text: string;
  textT: string;
  description: string;
};

const App = () => {
  const [data, setData] = useState<resultProps[]>([]);
  const [back, setBack] = useState(0);
  const [backtext, setBacktext] = useState(0)
  
  const descriptionClick =(id: number) => {
    setBack(id)
    setBacktext(id)
  }


useEffect(()=>{
  const fetchdata = async() => {
    const request = await fetch("./json.json");
    const response = await request.json();
    setData(response)
  }
  fetchdata()
},[])


  return (
  
    <>
    {
      data.map((val)=>(
          <div key={val.id} className="flip reletive inset-x-0 mx-auto mt-5 text-white ">
    <div className={back === val.id? 'card w-full h-full is-flipped' : 'card w-full h-full'}>
      {/* card front */}
      <div className="absolute rounded-2xl pt-5 pl-8 pr-5 w-full h-full card__face front ">
        <h2>{val.text} <br /> {val.textT}</h2>
        <div className="open absolute" onClick={() => descriptionClick(val.id)}></div>
      </div>
      {/* card back */}
      <div className="absolute rounded-2xl pt-5 pl-8 pr-5 w-full h-full card__face back">
        <div className={backtext === val.id? 'backtext' : 'backtextb'}>
        <h2 className="mb-5">About {val.text}</h2>
        <p>{val.description} </p>
        </div>
        <div className="close absolute"></div>
      </div>
    </div>
  </div>
      ))
    }
    </>

  );
};

export default App;
