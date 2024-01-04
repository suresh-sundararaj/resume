import React from "react";
import DesktopApp from "./DesktopApp";
import { projectImagesPath } from "../utils";
import useIsMobileScreen from "../hooks/useIsMobileScreen";
import { ReactComponent as KeyboardDoubleArrowDown } from "../assets/svg/keyboard_double_arrow_down.svg";
import { ReactComponent as KeyboardDoubleArrowUp } from "../assets/svg/keyboard_double_arrow_up.svg";

const collapseStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "90%",
  gridTemplateRows: "repeat(2, 125px)",
  gridTemplateAreas: `
                'grocery coffee bms'
                'grocery coffee bms'
              `,
  gap: "15px",
};

const expandStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "90%",
  gridTemplateRows: "repeat(32, 125px)",
  gridTemplateAreas: `
                'grocery coffee bms'
                'grocery coffee bms'
                'burgerking muscle pizza'
                'burgerking muscle pizza'
                'fruits realestate crypto'
                'fruits realestate crypto'
                'fruits realestate crypto'
                'fruits realestate crypto'
                'fruits realestate crypto'
                'fruits realestate brindhanush'
                'fruits realestate brindhanush'
                'fruits realestate hotstar'
                'chicken brinitems hotstar'
                'chicken brinitems hotstar'
                'chicken brinitems hotstar'
                'chicken brinitems hotstar'
                'chicken brinitems foodie'
                'chicken brinitems foodie'
                'bikes qrcode foodie'
                'bikes qrcode foodie'
                'bikes qrcode foodie'
                'bikes qrcode foodie'
                'bikes qrcode foodie'
                'bikes charactercount foodie'
                'cars charactercount foodie'
                'cars charactercount foodie'
                'toyota convertinator .'
                'toyota convertinator .'
                'toyota convertinator .'
                'toyota convertinator .'
                'toyota convertinator .'
                'toyota convertinator .'
              `,
  gap: "15px",
};

const mobileCollapseStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "95%",
  gridTemplateRows: "repeat(3, 250px)",
  gridTemplateAreas: `
                'grocery'
                'coffee'
                'bms'
              `,
  gap: "15px",
};

const mobileExpandStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "95%",
  gridTemplateRows: "repeat(90, 125px)",
  gridTemplateAreas: `
                'grocery'
                'grocery'
                'coffee'
                'coffee'
                'bms'
                'bms'
                'burgerking'
                'burgerking'
                'muscle'
                'muscle'
                'pizza'
                'pizza'
                'fruits'
                'fruits'
                'fruits'
                'fruits'
                'fruits'
                'fruits'
                'fruits'
                'fruits'
                'realestate'
                'realestate'
                'realestate'
                'realestate'
                'realestate'
                'realestate'
                'realestate'
                'realestate'
                'crypto'
                'crypto'
                'crypto'
                'crypto'
                'crypto'
                'brindhanush'
                'brindhanush'
                'hotstar'
                'hotstar'
                'hotstar'
                'hotstar'
                'hotstar'
                'chicken'
                'chicken'
                'chicken'
                'chicken'
                'chicken'
                'chicken'
                'brinitems'
                'brinitems'
                'brinitems'
                'brinitems'
                'brinitems'
                'brinitems'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'foodie'
                'bikes'
                'bikes'
                'bikes'
                'bikes'
                'bikes'
                'bikes'
                'qrcode'
                'qrcode'
                'qrcode'
                'qrcode'
                'qrcode'
                'charactercount'
                'charactercount'
                'charactercount'
                'cars'
                'cars'
                'toyota'
                'toyota'
                'toyota'
                'toyota'
                'toyota'
                'toyota'
                'convertinator'
                'convertinator'
                'convertinator'
                'convertinator'
                'convertinator'
                'convertinator'
              `,
  gap: "15px",
};

export default function DesktopApps() {
  const [isExpanded, setIsExpanded] = React.useState();
  const [hover, setHover] = React.useState(false);
  const isMobile = useIsMobileScreen();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: "30px",
        gap: "10px",
      }}
    >
      <h3
        style={{
          alignSelf: "center",
          width: isMobile ? "95%" : "90%",
          textAlign: "left",
        }}
      >
        Sample Screens - Webpage
      </h3>
      {isExpanded ? (
        <div style={isMobile ? mobileExpandStyle : expandStyle}>
          {projectImagesPath.desktopApps.map(({ name, style, img }) => (
            <DesktopApp style={style} img={img} key={name} />
          ))}
        </div>
      ) : (
        <div style={isMobile ? mobileCollapseStyle : collapseStyle}>
          {projectImagesPath.desktopApps
            .slice(0, 3)
            .map(({ name, style, img }) => (
              <DesktopApp style={style} img={img} key={name} />
            ))}
        </div>
      )}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: isMobile ? "95%" : "90%",
          borderRadius: "0",
          background: hover
            ? "linear-gradient(to bottom, #bababa 0%, transparent 100%)"
            : "linear-gradient(to bottom, transparent 0%, #bababa 100%)",
          border: "none",
          fontSize: "2em",
          boxShadow:
            "0 1px 2px rgba(0, 0, 0, 0.2), 0 1.5px 5px rgba(0, 0, 0, 0.19)",
          cursor: hover ? "pointer" : "context-menu",
          transition: hover ? "1s ease" : "none",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isExpanded ? (
          <KeyboardDoubleArrowUp width="48px" height="48px" />
        ) : (
          <KeyboardDoubleArrowDown width="48px" height="48px" />
        )}
      </button>
    </div>
  );
}
