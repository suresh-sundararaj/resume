const style = {
  backgroundColor: "#EDEDED",
  color: "#1E586A",
  fontSize: "1em",
  padding: "10px 20px 10px 30px",
  borderRadius: "2% 15% 2% 15%",
};

function Skills() {
  return (
    <div style={style}>
      <h4
        style={{
          margin: 0,
          textDecoration: "underline",
          marginBottom: "10px",
          textAlign: "left",
        }}
      >
        Designing Skills
      </h4>
      <div style={{ display: "flex" }}>
        <ul
          style={{
            fontSize: "0.7em",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            UI Design
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            User Interface
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            User Flow
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Style Guide
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Webpage
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Mobile Application Design
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Web Design
          </li>
        </ul>
        <ul
          style={{
            fontSize: "0.7em",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            User Experieince Design
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Prototyping
          </li>
          <li
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "0.8em",
            }}
          >
            Wireframing
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
