import React from "react";

export default function DesktopApp({ appInfo }) {
  return appInfo.map(({ img, style }) => (
    <img src={img} alt="" style={style} />
  ));
}
