import Journey from "./Journey";
import About from "./About";
import Experience from "./Experience";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "1em",
  width: "100%",
  paddingTop: "70px",
  paddingBottom: "70px",
  boxShadow: "5px white",
};

function Kyc() {
  return (
    <div style={style}>
      <Experience />
      <About />
      <Journey />
    </div>
  );
}

export default Kyc;
