import React from "react";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  width: "100%",
};

export default function Header() {
  return (
    <header>
      <div style={style}>
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "right",
          }}
        >
          <p
            style={{
              margin: "20px",
            }}
          >
            Home
          </p>
          <p
            style={{
              margin: "20px",
            }}
          >
            Works
          </p>
          <p
            style={{
              margin: "20px",
            }}
          >
            Experience
          </p>
          <p
            style={{
              margin: "20px",
            }}
          >
            About
          </p>
          <p
            style={{
              margin: "20px",
            }}
          >
            My journey
          </p>
          <p
            style={{
              margin: "20px",
            }}
          >
            Resume
          </p>
        </div>
      </div>
    </header>
  );
}
