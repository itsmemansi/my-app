import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// <> </>   => Jsx Fragment
function App() {
  const[mode, setMode] = useState("light");
  const[modeText, setModeText] = useState("Enable DarkMode");
  const[alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setModeText("Enable LightMode");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Enable DarkMode");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <> 
  {/* <BrowserRouter> */}
  {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"></Navbar> */}
  {/* <Navbar></Navbar> */}
  <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeText={modeText}></Navbar>
  <Alert alert={alert}/>
  <div className="container my-3">
      {/* /users --> it will render component 1
      /users/skills --> it will render component 2..this is possible bcoz of exact keyword given below */}
        {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> */}
          {/* <Route exact path="/" 
      element={<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}></TextForm>
}>
          </Route> */}
          <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}></TextForm>
        {/* </Routes> */}
  </div>
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;
