import PhoneSvg from "../assets/svg/phone.svg";
import MailSvg from "../assets/svg/mail.svg";
import LinkedinSvg from "../assets/svg/linkedin.svg";
import BehanceSvg from "../assets/svg/behance.svg";
import WhatappSvg from "../assets/svg/whatsapp.svg";

function Footer() {
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#111827",
        color: "#FFFFFF",
        padding: "50px",
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
        <img src={WhatappSvg} width="35px" height="35px" alt="whatsapp icon" />
      </div>
    </div>
  );
}

export default Footer;
