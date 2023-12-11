import Education from "./Education";
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
    </div>
  );
}

export default Kyc;
