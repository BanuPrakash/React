import logo from './logo.svg';

import Counter from './components/Counter';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import { useState } from 'react';
import ReducerComponent from './components/ReducerComponent';

function App() {
  let [id, setId] = useState(1);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Users setUserId={setId}/>
          </div>
          <div className='col-md-8'>
            <UserDetails id={id}/>
          </div>
        </div>
      </div> */}
      <ReducerComponent/>
    </div>
  );
}

export default App;
