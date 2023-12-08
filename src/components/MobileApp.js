import React from "react";

export default function MobileApp({ appInfo }) {
  return (
    <div style={appInfo.style}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "repeat(1, 250px)",
          gap: "5px",
        }}
      >
        {appInfo.screens.map(({ img }) => (
          <img src={img} alt="" width="100%" height="100%" />
        ))}
      </div>
    </div>
  );
}
