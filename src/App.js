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
          <label> Gender:  </label><br/>
          {/* <label><input type ="radio" id="male" name='gender' value="male"/>Male</label> */}
          <input type ="radio" id="male" name='gender' value="male"/>Male
          <input type ="radio" id= "female" name='gender' value="female"/>Female
          {/* <label><input type ="radio" id= "female" name='gender' value="female"/>Female</label> */}
          <br/>
          <label> Age: <br/>
            <input type ="number"></input>
          </label><br/>
          <label> Phone Number: <br/>
            <input type ="text" maxLength="10"></input>
          </label><br/>
          <label> Address: <br/>
            <input type ="text"></input>
          </label>
        </div>
      
    </div>
  );
}

export default App;
