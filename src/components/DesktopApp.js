import React from "react";

export default function DesktopApp({ appInfo }) {
  return appInfo.map(({ img, style }, i) => (
    <img src={img} alt="" style={style} key={i} />
  ));
}
