import React from "react";
import { useLocation } from "react-router-dom";

const style = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  width: "100%",
  position: "fixed",
  boxShadow: "0px 1px rgba(0, 0, 0, 0.2)",
};

function HeaderContent({ title }) {
  let location = useLocation();
  const [clicked, setClicked] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    setClicked(decodeURI(location.hash) === `#${title.toLowerCase()}`);
  }, [location.hash, title]);

  return (
    <a
      style={{
        margin: "15px",
        color: clicked ? "white" : "inherit",
        backgroundColor: clicked ? "#ED7D31" : "inherit",
        padding: "5px",
        borderRadius: "5px",
        cursor: hover ? "pointer" : "context-menu",
        textDecoration: "none",
      }}
      onClick={() => {
        setClicked(true);
      }}
      onMouseOver={() => setHover(true)}
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
