import Education from "./Education";
import Skills from "./Skills";
import Journey from "./Journey";

const style = {
  backgroundColor: "#0E2036",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "1em",
  color: "white",
  width: "100%",
  paddingTop: "70px",
  paddingBottom: "70px",
  boxShadow: "5px white",
};

function Kyc() {
  return (
    <div style={style}>
      <div style={{ width: "50%", marginBottom: "20px" }}>
        <h3>Who am I?</h3>
        <p>
          Hi folks, I’m a creative UI/UX Designer and create user interface Web
          Application and Mobile Applications.
        </p>
      </div>
      <div style={{ display: "flex", gap: "50px", marginBottom: "20px" }}>
        <Education />
        <Skills />
      </div>
      <Journey />
    </div>
  );
}

export default Kyc;
