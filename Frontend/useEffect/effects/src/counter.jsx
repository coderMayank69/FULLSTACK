import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    setName(e.target.value);
  }

  useEffect(function myEffect(){
    return console.log("Effect ran (mounted)");
  }, [count]);

  const increment = () => {
    setCount((c)=> c + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <h5>Name: {name}</h5>
      <input type="text" value={name} onChange={handleSubmit} />
    </div>
  );
}