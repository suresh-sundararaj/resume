import MobileApps from "./MobileApps";
import DesktopApps from "./DesktopApps";

function Projects() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <h2 style={{ margin: 0 }}>
        <u>Works</u>
      </h2>
      <MobileApps />
      <DesktopApps />
    </div>
  );
}

export default Projects;
