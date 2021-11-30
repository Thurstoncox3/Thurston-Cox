import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return() => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        {/* <Link> */}
          <Route path='/' exact component={Home} />
          <Route path='/project' exact component={Projects} />
          <Route path='/about' exact component={About} />
          <Route path='/resume' exact component={Resume} />
        {/* </Link> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App;