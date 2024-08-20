import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  let total = 0;

  const renderTotal = () => {
    if (total > 0) {
      return <h1 className="total-text success">Amount</h1>;
    } else if (total < 0) {
      return <h1 className="total-text danger">-Amount</h1>;
    } else {
      return <h1 className="total-text">Rs.30000</h1>;
    }
  };


  return (
    <main>
      <div>
        {renderTotal()}
        <div className="input-container">
          <input
            type="text"
            placeholder="Income or expense"
            name="statement"
          />
          <input
            type="number"
            placeholder="Rs 5000"
            name="amount"
          />
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
        <div>
          <div className="card" key="1">
            <div className="card-info">
              <h4>name 1</h4>
              <p>date 1</p>
            </div>
            <p className="amount-text success">
              Rs. 50000
            </p>
          </div>
          <div className="card" key="2">
            <div className="card-info">
              <h4>name 2</h4>
              <p>date 2</p>
            </div>
            <p className="amount-text danger">
              Rs. 20000
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;