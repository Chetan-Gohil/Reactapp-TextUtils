import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light"); // whether Dark Mode is Enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#000050'
      showAlert("Dark Mode has been Enabled", "success")

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm heading="Enter The Text to Analyse" mode={mode} showAlert={showAlert}/>
      </div> */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter | Character Counter " mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
