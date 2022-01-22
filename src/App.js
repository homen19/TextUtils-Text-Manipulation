
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert'
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


const toggleMode = () =>{
  if(mode === 'dark'){
    setMode('light')
    document.body.style.background = "white";
    showAlert("Light Mode has been Enabled", "success");
  
  }
  else{
    setMode('dark')
    document.body.style.background = '#212529';
    showAlert("Dark Mode has been Enabled", "success");
    
  }
}

  return(
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
           */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch>  */}
      </div>
      {/* </Router> */}

    </>
  )
}

export default App;
