import Experience from "./Experience";
import About from "./About";
import Journey from "./Journey";
import Resume from "./Resume";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "1em",
  width: "100%",
  paddingBottom: "70px",
  boxShadow: "5px white",
};

function Kyc() {
  return (
    <div style={style}>
      <Experience />
      <About />
      <Journey />
      <Resume />
    </div>
  );
}

export default Kyc;
