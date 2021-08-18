import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

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

function App() {

  const [count, setCount] = useState(0);
  return(
    <div>
      <CommonCounter count={count} setCount={setCount}/>
      <CommonCounter count={count} setCount={setCount}/>
      <CommonCounter count={count} setCount={setCount}/>
      <Counter />
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
