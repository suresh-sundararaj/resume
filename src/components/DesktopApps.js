import React from "react";
import DesktopApp from "./DesktopApp";
import { projectImagesPath } from "../utils";

const style = {
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
      <div style={style}>
        {Object.entries(projectImagesPath.desktopApps).map(([key, appInfo]) => (
          <DesktopApp appInfo={appInfo} key={key} />
        ))}
      </div>
    </div>
  );
}
