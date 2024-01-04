import useIsMobileScreen from "../hooks/useIsMobileScreen";
import AboutSvg from "../assets/svg/about_us_page_cuate_1.svg";

function About() {
  const isMobile = useIsMobileScreen();
  return (
    <div
      style={{
        width: isMobile ? "95%" : "70%",
        paddingTop: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="about"
    >
      <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
        <u>About</u>
      </h2>
      <img
        src={AboutSvg}
        width={isMobile ? "80%" : "400px"}
        alt="About illustration"
      />
      <div style={{ width: isMobile ? "100%" : "70%" }}>
        <h3>Who am I?</h3>
        <p>
          Hi, folks I’m a creative UI UX Designer and create user interface Web
          application and Mobile application
        </p>
      </div>
      <div
        style={{
          fontSize: "0.8em",
          padding: isMobile ? "0 10px 5px 10px" : "0 50px 25px 50px",
          boxShadow:
            "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "5px",
          marginTop: "20px",
          width: isMobile ? "95%" : "65%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>
          <u>Education</u>
        </h2>
        <div
          style={{
            display: "flex",
            gap: isMobile ? "10px" : "60px",
          }}
        >
          <div>
            <div>
              <h4 style={{ marginBottom: 0, textAlign: "left" }}>
                Master of Business Administration - 2020
              </h4>
              <p style={{ marginTop: "6px", textAlign: "left" }}>
                Kalasalingam University - CGPA: 7.9
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h4 style={{ marginBottom: 0, textAlign: "left" }}>
                HSC, Commerce - 2015
              </h4>
              <p style={{ marginTop: "6px", textAlign: "left" }}>
                NHSS - CGPA: 7.0
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4 style={{ marginBottom: 0, textAlign: "left" }}>
                B.com CA, Computer Application - 2018
              </h4>
              <p style={{ marginTop: "6px", textAlign: "left" }}>
                VHNSN College - CGPA: 6.7
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h4 style={{ marginBottom: 0, textAlign: "left" }}>
                SSLC, 10th - 2013
              </h4>
              <p style={{ marginTop: "6px", textAlign: "left" }}>
                NHSS - CGPA: 7.3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "0.8em",
          padding: isMobile ? "0 10px 20px 10px" : "0 50px 25px 50px",
          boxShadow:
            "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "5px",
          marginTop: "40px",
          width: isMobile ? "95%" : "65%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>
          <u>Design Skills</u>
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "space-between",
          }}
        >
          {[
            "User Interface",
            "User Experience",
            "Mobile Application",
            "Web Application",
            "Wireframing",
            "Prototyping",
            "Style Guide",
            "User Flow",
            "Tablet Screens",
            "UX Research",
            "Poster Design",
            "Figma",
          ].map((value, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                alignItems: "center",
              }}
              key={i}
            >
              <div
                style={{
                  width: "1em",
                  height: "1em",
                  backgroundColor: "#ED7D31",
                  borderRadius: "3px",
                }}
              />
              <p style={{ margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
