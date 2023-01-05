import React from "react";

function Nasa(props){
    const {data,dateChanger}=props;
    return (
      <div> <h1>{data.title}</h1>
      <p>{data.explanation}</p>
      <img src={data.url} alt={data.title}/>
      <div className = "date-content">
      <button onClick={()=> dateChanger(-1)}>azalt</button>
      <p>{data.date}</p>
      <button onClick={()=> dateChanger(1)}>arttır</button>
      </div>
      <p>
       {data.copyright}
      </p> </div> 
    )
}
export default Nasa