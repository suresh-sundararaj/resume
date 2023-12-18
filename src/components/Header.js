import React from "react";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  width: "100%",
  position: "fixed",
};

function HeaderContent({ title }) {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      style={{
        margin: "15px",
        color: hover ? "white" : "inherit",
        backgroundColor: hover ? "#ED7D31" : "inherit",
        padding: "5px",
        borderRadius: "5px",
        cursor: hover ? "pointer" : "context-menu",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={"#" + title.toLowerCase()}
    >
      {title}
    </a>
  );
}

export default function Header() {
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "right",
        }}
      >
        {["Home", "Works", "Experience", "About", "My journey", "Resume"].map(
          (title, i) => (
            <HeaderContent title={title} key={i} />
          )
        )}
      </div>
    </div>
  );
}
