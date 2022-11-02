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
          <input type ="radio" id="male" name='gender' value="male"/>Male<br/>
          <input type ="radio" id= "female" name='gender' value="female"/>Female<br/>
          <input type ="radio" id= "transgender" name='gender' value="transgender"/>Transgender<br/>
          <input type ="radio" id= "non-binary" name='gender' value="non-binary"/>Non-Binary<br/>
          <input type ="radio" id= "not to disclose" name='gender' value="not to disclose"/>I chose not to disclose<br/>
          <input type ="radio" id= "self describe" name='gender' value="self describe"/>I prefer to self describe<br/>

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
