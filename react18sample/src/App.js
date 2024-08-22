import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);

  function gettodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        // setting 3 state members --> react 18 does update in batch
        setLoading(false);
        setTodos(data);
        setTotal(data.length);
      });
  }
  useEffect(() => {
    gettodos();
  }, []);

  return (
    <div>
      <button onClick={gettodos}>Refetch</button>
      {
        console.log(`
            Rendering with values Loading : ${loading} and 
            todos : ${todos.length > 0 ? "loaded" : "fetching"}
            and total : ${total}
          `
        )
      }
      {
        loading ? <div>Loading...</div> : <TodoList todos={todos} />
      }
      <div>
        Total : {total}
      </div>
    </div>
  );
}

function TodoList({ todos }) {
  return <table cellPadding="5">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {
        todos.map(todo => {
          return <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
          </tr>
        })
      }
    </tbody>
  </table>
}
export default App;
