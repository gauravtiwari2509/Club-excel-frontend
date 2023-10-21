import React from "react"
import styled from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  margin-left: 10px;
  .leftcontact-comp {
    position: relative;
    padding-left: 40px;
    width: 491px;
    height: 647px;
    flex-shrink: 0;
    background: #011c2b;
    border-radius: 12px;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0px;
    }
  }

  .contact-head {
    padding-top: 40px;

    margin-bottom: 6px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 800px) {
      padding-top: 0px;
      margin-bottom: 0px;
    }
  }
  .cmsg {
    padding-top: 6px;
    color: #c9c9c9;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      padding-top: 0px;
    }
  }
  .clogo {
    margin-right: 25px;
  }
  .ctxt {
    padding-top: 111px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .scircle {
    position: absolute;
    width: 138px;
    height: 138px;
    flex-shrink: 0;
    background: rgba(255, 249, 249, 0.13);
    border-radius: 100%;
    bottom: 10%;
    right: 10%;
    @media (max-width: 800px) {
      width: 54px;
      height: 54px;
      flex-shrink: 0;
      bottom: 12%;
      right: 15%;
    }
  }
  .lcircle {
    position: absolute;
    flex-shrink: 0;
    background: rgba(255, 249, 249, 0.13);
    border-radius: 100%;
    width: 269px;
    height: 269px;
    bottom: -17%;
    right: -17%;
    @media (max-width: 800px) {
      width: 269px;
      height: 269px;
      flex-shrink: 0;
      bottom: -20%;
      right: -27%;
    }
  }
  .emal {
    padding-top: 50px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .loc {
    display: flex;
    align-items: center;
    padding-top: 50px;
    width: 288px;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }
  .social-logo {
    padding-top: 125px;
    margin: 39px;
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    margin-left: 2px;
    cursor: pointer;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -5px;
    }
  }
  .wm221 {
    @media (max-width: 800px) {
      text-align: center;
      width: 231px;
    }
  }
  .cursor {
  }
`

function LeftContact() {
  return (
    <MainCont>
      <div className="leftcontact-comp">
        <div className="contact-head">Contact Information</div>
        <div className="cmsg">Say something to start a live chat!</div>
        <div className="ctxt">
          <Image
            src={"/phonecall.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          +91 700XXXXXXX
        </div>
        <div className="emal">
          <Image
            src={"/ic_sharp-email.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          demo@gmail.com
        </div>
        <div className="loc">
          <Image
            src={"/carbon_location-filled.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          <div className="wm221">
            {" "}
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </div>
        </div>
        <div className="scircle"></div>
        <div className="lcircle"></div>
        <div className="social-logo">
          <Image
            src={"/twitter.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />

          <Image
            src={"/insta.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          <Image
            src={"/linkdin.png"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
            onClick={() =>
              window.open("https://www.linkedin.com/company/club-excel-nist/")
            }
          />

          <Image
            src={"/discord.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
        </div>
      </div>
    </MainCont>
  )
}

export default LeftContact
