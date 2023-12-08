const style = {
  backgroundColor: "#EDEDED",
  color: "#1E586A",
  fontSize: "1em",
  padding: "10px 20px",
  borderRadius: "2% 15% 2% 15%",
};

function Education() {
  return (
    <div style={style}>
      <h4
        style={{
          margin: 0,
          textDecoration: "underline",
          marginBottom: "10px",
          textAlign: "left",
          fontSize: "0.9em",
        }}
      >
        Education
      </h4>
      <ul
        style={{
          fontSize: "0.7em",
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ marginBottom: "10px", textAlign: "left" }}>
          <b>Master of Business Administration - 2020</b>
          <p style={{ marginTop: "2px", fontSize: "0.8em" }}>
            Kalasalingam University, CGPA - 7.9
          </p>
        </li>
        <li style={{ marginBottom: "10px", textAlign: "left" }}>
          <b>B.com CA, Computer Application - 2018</b>
          <p style={{ marginTop: "2px", fontSize: "0.8em" }}>
            VHNSN College, CGPA - 6.7
          </p>
        </li>
        <li style={{ marginBottom: "10px", textAlign: "left" }}>
          <b>HSC, Commerce - 2015</b>
          <p style={{ marginTop: "2px", fontSize: "0.8em" }}>
            Nadar Higher Secondary School, CGPA - 7.0
          </p>
        </li>
        <li style={{ marginBottom: "10px", textAlign: "left" }}>
          <b>SSLC, 10th - 2013</b>
          <p style={{ marginTop: "2px", fontSize: "0.8em" }}>
            Nadar Higher Secondary School, CGPA - 7.3
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
