import React from "react";
import MobileApp from "./MobileApp";
import { projectImagesPath } from "../utils";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

const expandStyle = {
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

const collapseStyle = {
  display: "grid",
  width: "90%",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "repeat(2, 125px)",
  gridTemplateAreas: `
                'food tunebunny fitness'
                'food tunebunny fitness'
              `,
  gap: "15px",
};

const mobileExpandStyle = {
  display: "grid",
  width: "95%",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(12, 250px)",
  gridTemplateAreas: `
                'food'
                'tunebunny'
                'fitness'
                'carrepair'
                'eveno'
                'realestate'
                'tictic'
                'verdo'
                'houzeo'
                'handyman'
                'fiton'
                'movie'
              `,
  gap: "15px",
};

const mobileCollapseStyle = {
  display: "grid",
  width: "95%",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(3, 250px)",
  gridTemplateAreas: `
                'food'
                'tunebunny'
                'fitness'
              `,
  gap: "15px",
};

export default function MobileApps() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isMobile = useIsMobileScreen();
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
      {isExpanded ? (
        <div style={isMobile ? mobileExpandStyle : expandStyle}>
          {projectImagesPath.mobileApps.map(({ name, style, screens }) => (
            <MobileApp screens={screens} style={style} key={name} />
          ))}
        </div>
      ) : (
        <div style={isMobile ? mobileCollapseStyle : collapseStyle}>
          {projectImagesPath.mobileApps
            .slice(0, 3)
            .map(({ name, style, screens }) => (
              <MobileApp screens={screens} style={style} key={name} />
            ))}
        </div>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
