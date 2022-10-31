import React from 'react';

import './App.css';


function App() {
  
  return (
    <div className='App'>  
      <h3>Edit</h3>
      <h1> Customer Profile </h1>
        <div>
          <label> Email: <br/>
            <input type ="email"></input>
          </label><br/>
          <label> Gender:  <br/>
            <input type ="text"></input>
          </label><br/>
          <label> Age: <br/>
            <input type ="number"></input>
          </label><br/>
          <label> Phone Number: <br/>
            <input type ="number"></input>
          </label><br/>
          <label> Address: <br/>
            <input type ="text"></input>
          </label>
        </div>
      
    </div>
  );
}

export default App;
