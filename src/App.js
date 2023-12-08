import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Kyc from "./components/Kyc";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Kyc />
    </div>
  );
}

export default App;
