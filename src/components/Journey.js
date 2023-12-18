import JourneySvg from "../assets/svg/journey_amico_1.svg";
import JourneyPathSvg from "../assets/svg/journey_road.svg";

function Journey() {
  return (
    <div
      style={{
        width: "70%",
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="my journey"
    >
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
        <u>My Journey</u>
      </h2>
      <img
        src={JourneySvg}
        width="300px"
        height="300px"
        alt="Journey illustration"
      />
      <div style={{ width: "100%", marginTop: "20px" }}>
        <img
          src={JourneyPathSvg}
          width="100%"
          alt="Journey path illustration"
        />
      </div>
      <div style={{ width: "100%", fontSize: "0.8em" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h4 style={{ marginBottom: 0, textAlign: "left" }}>
              JUNIOR RELATIONSHIP EXECUTIVE
            </h4>
            <p style={{ marginTop: "6px", textAlign: "left" }}>
              <b>Muthoot Finance</b> - (Feb 2021 to Oct 2022)
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: 0, textAlign: "left" }}>
              UI UX DESIGNER
            </h4>
            <p style={{ marginTop: "6px", textAlign: "left" }}>
              <b>Codeancy</b> - Internship (May to July 2023)
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: 0, textAlign: "left" }}>
              UI UX DESIGNER
            </h4>
            <p style={{ marginTop: "6px", textAlign: "left" }}>
              <b>WebbyWolf</b> - Internship (Aug 2023 Present)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
