import {useState} from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
     <p>{count}</p>
     <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
