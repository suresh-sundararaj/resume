import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Kyc from "./components/Kyc";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Intro />
            <Projects />
            <Kyc />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
