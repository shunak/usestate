import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react";

function Counter(props: any){
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Add</button>
      click count: {count} times
    </div>
  );
}


let CommonCounter = (props:any) =>	{
  const {count, setCount} = props;
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Add</button>
      click count: {count} times
    </div>
  )
}

// Pie Chart component
let Pie = (props: any) => {
  const {percent, color = "#ff0000"} = props;

  // Get reference to rendered canvas element
  const canvasRef= useRef(null);

   const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext('2d');
   }

  useEffect(
    () => {
      const ctx = getContext();
      ctx.clearRect(0,0,100,100);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(50,50);
      ctx.arc(50,50,50,0,(percent / 100)*Math.PI*2,false);
      ctx.lineTo(50,50);
      ctx.fill();
    }    
  );

 return <canvas ref={canvasRef} width={100} height={100} />;
}


function App() {

  const [count, setCount] = useState(0);
  return(
    <div>
      <CommonCounter count={count} setCount={setCount}/>
      <CommonCounter count={count} setCount={setCount}/>
      <CommonCounter count={count} setCount={setCount}/>
      <Counter />
      <Pie percent={80} />
    </div>
  )

  // return (
  //   <div>
  // <Counter />
  // <Counter />
  // <Counter />
  //  </div>
  // );
}

export default App;
