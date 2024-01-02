import React from "react";
import DesktopApp from "./DesktopApp";
import { projectImagesPath } from "../utils";

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

export default function DesktopApps() {
  const [isExpanded, setIsExpanded] = React.useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: "30px",
      }}
    >
      <h3 style={{ alignSelf: "center", width: "90%", textAlign: "left" }}>
        Sample Screens - Webpage
      </h3>
      {isExpanded ? (
        <div style={expandStyle}>
          {projectImagesPath.desktopApps.map(({ name, style, img }) => (
            <DesktopApp style={style} img={img} key={name} />
          ))}
        </div>
      ) : (
        <div style={collapseStyle}>
          {projectImagesPath.desktopApps
            .slice(0, 3)
            .map(({ name, style, img }) => (
              <DesktopApp style={style} img={img} key={name} />
            ))}
        </div>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
