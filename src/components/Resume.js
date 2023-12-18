import React from "react";
import ResumeSvg from "../assets/svg/resume_bro_1.svg";

function Resume() {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        width: "70%",
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="resume"
    >
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
        <u>Resume</u>
      </h2>
      <img src={ResumeSvg} width="350px" alt="Resume illustration" />
      <button
        style={{
          backgroundColor: hover ? "inherit" : "#0174BE",
          color: hover ? "inherit" : "#FFFFFF",
          border: 0,
          padding: "10px",
          boxShadow: hover
            ? "3px 3px white, 4px 4px #0174BE"
            : "3px 3px white, 4px 4px #0174BE",
          cursor: hover ? "pointer" : "context-menu",
          border: hover ? "1px solid #0174BE" : "inherit",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <b>Download & View</b>
      </button>
    </div>
  );
}

export default Resume;
