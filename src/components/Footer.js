import useIsMobileScreen from "../hooks/useIsMobileScreen";

import PhoneSvg from "../assets/svg/phone.svg";
import MailSvg from "../assets/svg/mail.svg";
import LinkedinSvg from "../assets/svg/linkedin.svg";
import BehanceSvg from "../assets/svg/behance.svg";
import WhatappSvg from "../assets/svg/whatsapp.svg";

function Footer() {
  const isMobile = useIsMobileScreen();
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        alignItems: isMobile ? "left" : "center",
        justifyContent: "space-between",
        backgroundColor: "#111827",
        color: "#FFFFFF",
        padding: isMobile ? "20px" : "50px",
        gap: "10px",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <img src={PhoneSvg} width="40px" height="40px" alt="phone icon" />
        <b>+91 8778433934</b>
      </div>
      <a
        href="mailto:ss861507@gmail.com"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src={MailSvg} width="40px" height="40px" alt="mail icon" />
          <b>ss861507@gmail.com</b>
        </div>
      </a>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <b>Follow Us on:</b>
        <a
          href="https://www.linkedin.com/in/ss861507/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedinSvg}
            width="35px"
            height="35px"
            alt="linkedin icon"
          />
        </a>
        <a
          href="https://www.behance.net/Ssuresh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={BehanceSvg} width="35px" height="35px" alt="behance icon" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=7094794126"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={WhatappSvg}
            width="35px"
            height="35px"
            alt="whatsapp icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
