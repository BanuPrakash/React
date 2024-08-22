import { useState } from "react";


function App() {
 const [count, setCount] = useState(0);
  return (
   <div>
      <h1> React 18 Example</h1>
      <span>Count : {count}</span>
      <button type="button" onClick={() => setCount(count+1)}>+</button>
   </div>
  );
}

export default App;
