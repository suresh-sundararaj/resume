import React from "react";
import { useLocation } from "react-router-dom";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

import HomeSvg from "../assets/svg/home.svg";
import WorkSvg from "../assets/svg/work.svg";
import ExperienceSvg from "../assets/svg/school.svg";
import AboutSvg from "../assets/svg/person.svg";
import JourneySvg from "../assets/svg/conversion_path.svg";
import ResumeSvg from "../assets/svg/attachment.svg";

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

const HEADERS = [
  {
    title: "Home",
    svgElement: HomeSvg,
  },
  {
    title: "Works",
    svgElement: WorkSvg,
  },
  {
    title: "Experience",
    svgElement: ExperienceSvg,
  },
  {
    title: "About",
    svgElement: AboutSvg,
  },
  {
    title: "My journey",
    svgElement: JourneySvg,
  },
  {
    title: "Resume",
    svgElement: ResumeSvg,
  },
];

function HeaderContent({ title, svgElement }) {
  const isMobile = useIsMobileScreen();
  let location = useLocation();
  const [clicked, setClicked] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    setClicked(decodeURI(location.pathname) === `/${title.toLowerCase()}`);
    if (title === "Home" && location.pathname === "/") {
      setClicked(true);
    }
  }, [location.pathname, title]);

  return (
    <a
      style={{
        margin: isMobile ? "5px" : "15px",
        color: clicked ? "white" : "inherit",
        backgroundColor: clicked ? "#ED7D31" : "inherit",
        padding: isMobile ? "1px 2.5px" : "5px",
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
      {isMobile ? (
        <img src={svgElement} alt={title} width="24px" height="24px" />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img src={svgElement} alt={title} width="24px" height="24px" />
          {title}
        </div>
      )}
    </a>
  );
}

export default function Header() {
  const isMobile = useIsMobileScreen();
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: isMobile ? "space-between" : "right",
        }}
      >
        {/* {["Home", "Works", "Experience", "About", "My journey", "Resume"].map(
          (title, i) => (
            <HeaderContent title={title} key={i} />
          )
        )} */}
        {HEADERS.map(({ title, svgElement }) => (
          <HeaderContent title={title} svgElement={svgElement} key={title} />
        ))}
      </div>
    </div>
  );
}
