import ResumeSvg from "../assets/svg/resume_bro_1.svg";

function Resume() {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
        <u>Resume</u>
      </h2>
      <img src={ResumeSvg} width="350px" alt="Resume illustration" />
      <button
        style={{
          backgroundColor: "#0174BE",
          color: "#FFFFFF",
          border: 0,
          padding: "10px",
          boxShadow: "3px 3px white, 4px 4px #0174BE",
        }}
      >
        <b>Download & View</b>
      </button>
    </div>
  );
}

export default Resume;
