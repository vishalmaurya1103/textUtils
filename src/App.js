import './App.css';
import React , {useState} from 'react';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import About from './componenets/About';
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)

   const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
   }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      showAlert('Dark mode has been enabled','success')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setmode('light')
      showAlert('Light mode has been enabled','success')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (

    <>
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/">
            <TextForm  showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> 
          </Route>
      </Switch>
      </div>  
    </Router>
    </>
  );
}

export default App;
