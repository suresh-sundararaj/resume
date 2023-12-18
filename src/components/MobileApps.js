import React from "react";
import MobileApp from "./MobileApp";
import { projectImagesPath } from "../utils";

const style = {
  display: "grid",
  width: "90%",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "repeat(8, 125px)",
  gridTemplateAreas: `
                'food tunebunny fitness'
                'food tunebunny fitness'
                'carrepair eveno realestate'
                'carrepair eveno realestate'
                'tictic verdo houzeo'
                'tictic verdo houzeo'
                'handyman fiton movie'
                'handyman fiton movie'
              `,
  gap: "15px",
};

export default function MobileApps() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3 style={{ alignSelf: "center", width: "90%", textAlign: "left" }}>
        Sample Screens - Mobile Application
      </h3>
      <div style={style}>
        {Object.entries(projectImagesPath.mobileApps).map(([key, appInfo]) => (
          <MobileApp appInfo={appInfo} key={key} />
        ))}
      </div>
    </div>
  );
}
