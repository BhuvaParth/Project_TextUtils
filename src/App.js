import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from './components/About';
import { Routes, Route } from "react-router-dom";
import TextForm from './components/TextForm'; // Ensure this import is correct

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
     <Navbar title="Parth Bhuva" />
     <Alert alerts={alert} />
     <TextForm showAlert={showAlert} heading="Enter Text to analyze" />
      {/* <Routes> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze" />} />  Example usage of TextForm */}
        {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      </>
  );
}

export default App;


// Navbar.PropTypes = {
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   alerts: PropTypes.string,
// };
