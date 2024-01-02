import React from "react";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "1em",
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "100px",
  boxShadow: "5px white",
  margin: "0 auto",
};

export default function Intro() {
  const isMobile = useIsMobileScreen();

  return (
    <div style={style} id="home">
      <div style={{ width: isMobile ? "95%" : "50%" }}>
        <p
          style={{
            margin: "12px",
            fontSize: "3em",
            letterSpacing: "6%",
            fontWeight: "bold",
          }}
        >
          Hi I’am Suresh
        </p>
        <p
          style={{
            margin: "12px",
            fontSize: "1.5em",
            letterSpacing: "3%",
            fontWeight: "500",
          }}
        >
          UI/UX Designer
        </p>
        <p
          style={{
            margin: "12px",
            lineHeight: "1.8em",
          }}
        >
          Dedicated to crafting interfaces that are not only visually appealing
          but also user-friendly. I prioritize the needs and preferences of
          users in my design process, aiming to deliver a seamless and
          delightful user experience.
        </p>
      </div>
    </div>
  );
}
