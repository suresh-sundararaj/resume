import ladder from "../assets/svg/ladder.svg";
import achievementperson from "../assets/svg/achievementperson.svg";
import path from "../assets/svg/path.svg";

function Journey() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>My Journey</h3>
      <div
        style={{
          display: "flex",
          alignItems: "space-between",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={path} alt="" width="125px" height="125px" />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <img src={achievementperson} alt="" width="50px" height="50px" />

          <img src={ladder} alt="" width="50px" height="100px" />
          <img
            src={ladder}
            alt=""
            width="50px"
            height="100px"
            style={{ color: "#727272" }}
          />
          <img src={ladder} alt="" width="50px" height="100px" />
        </div>
      </div>
    </div>
  );
}

export default Journey;
