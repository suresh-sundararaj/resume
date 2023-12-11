import ExperienceSvg from "../assets/svg/certification_pana.svg";

function Work({ title, company, otherInfo }) {
  return (
    <div
      style={{
        width: "40%",
        padding: "25px",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <h3 style={{ margin: 0, textAlign: "left" }}>{title}</h3>
        <div
          style={{ width: "28px", height: "10px", backgroundColor: "#ED7D31" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <p style={{ margin: 0 }}>
          <b>{company}</b>
        </p>
        <p style={{ margin: 0 }}>-</p>
        <caption>{otherInfo}</caption>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div style={{ width: "70%" }}>
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
        <u>Experience</u>
      </h2>
      <img src={ExperienceSvg} width="400px" alt="experience illustration" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "0.8em",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <Work
          title="UI UX DESIGNER"
          company="Webbywolf"
          otherInfo="Internship (Aug 2023 - Present)"
        />
        <Work
          title="UI UX DESIGNER"
          company="Codeancy"
          otherInfo="Internship (May to July 2023)"
        />
        <Work
          title="JUNIOR RELATIONSHIP EXECUTIVE"
          company="Muthoot Finance"
          otherInfo="Full time (Feb 2021 to Oct 2022)"
        />
      </div>
    </div>
  );
}

export default Experience;
