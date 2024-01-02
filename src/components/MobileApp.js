import React from "react";

export default function MobileApp({ style, screens }) {
  return (
    <div style={style}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "repeat(1, 250px)",
          gap: "5px",
        }}
      >
        {screens.map(({ img }, i) => (
          <img src={img} alt="" width="100%" height="100%" key={i} />
        ))}
      </div>
    </div>
  );
}
