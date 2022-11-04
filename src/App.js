import React from 'react';
import './App.css';
import back from './back.png';
import {Form} from 'react-bootstrap';

function saved(){
  alert('Saved Successfully')
}

function App() {
  
  return (
    <div className='App'>
      <div className='Navbar'>
        <img src={back} alt="back img" align ="left"></img>
        <h3>Edit</h3>
      </div>
      <h1> Customer Profile </h1>
        <div className='form'>
          <Form>
            <label> Email: <br/>
              <input type ="email" placeholder='Enter your email'></input>
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
              <input type ="number" min="18" max="80" placeholder='Enter your age'></input>
            </label><br/>
            <label> Phone Number: <br/>
              <input type ="tel" id ="phone" name="phone" placeholder='123-456-7899' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'></input>
            </label><br/>
            <label> Address: <br/>
              <input type ="text" placeholder='Enter your address'></input>
            </label><br/>
          
          <button onClick={saved}>Save</button>
          
        </Form>
        </div>
      
    </div>
  );
}

export default App;
