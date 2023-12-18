import MobileApps from "./MobileApps";
import DesktopApps from "./DesktopApps";

function Projects() {
  return (
    <div style={{ backgroundColor: "#FAFAFA", paddingTop: "70px" }} id="works">
      <h2 style={{ margin: 0 }}>
        <u>Works</u>
      </h2>
      <MobileApps />
      <DesktopApps />
    </div>
  );
}

export default Projects;
