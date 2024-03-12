import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { IoLocation } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import Image from "next/image"
const MainCont = styled.div`
  * {
    overflow-x: hidden;
    color: #f2f4ff;
    font-family: "Montserrat", sans-serif;
    scroll-behavior: smooth;
  }
  .club {
    background-color: #160e2a;
    height: 84vh;
  }
  .twopart {
    display: flex;
    height: 70vh;
    width: 100vw;
  }
  .leftside {
    width: 50%;
  }
  .leftside h1 {
    margin-left: 150px;
    font-size: 65px;
    color: #437bf4;
    padding-top: 110px;
    background-color: #160e2a;
    animation: fadeLeftToRight 3s ease-in-out infinite;
  }

  @keyframes fadeLeftToRight {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.8;
    }
  }

  .leftside > h3 {
    margin-left: 150px;
  }
  .work {
    color: #ffffff;
    line-height: 30px;
    font-size: 25px;
    line-height: 35px;
    animation: flicker 0.8s infinite;
  }
  @keyframes flicker {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }

  .workshop {
    font-size: 50px;
    color: #e543d8;
  }

  .rightside {
    height: 100%;
    width: 50%;
    padding-top: 50px;
  }
  .excellogo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 58%;
    @media (max-width: 800px) {
      height: 346px;
      width: 360px;
    }
  }
  .msg {
    display: flex;
    justify-content: space-evenly;
    background-color: #160e2a;
    margin-bottom: 50px;
  }
  .msg1,
  .msg2 {
    display: flex;
    gap: 10px;
    font-size: 25px;
    align-items: center;
    justify-content: center;
  }
  .msg1 p,
  .msg2 p {
    font-weight: 500;
  }
  .aboutWorkshop {
    background-color: #1b0d3a;
  }
  .aboutWorkshop {
    height: auto;
    padding-bottom: 40px;
  }
  .aboutWorkshop > h1 {
    padding-top: 30px;
    text-align: center;
    margin-bottom: 25px;
    color: rgb(116, 97, 51);
    text-decoration: underline;
    text-underline-offset: 10px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 3em;
    text-shadow: -10px -5px 1px rgb(6, 6, 6);
    font-weight: 800;
  }
  .about {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    position: relative;
    flex-direction: row-reverse;
    overflow: hidden;
    padding-bottom: 40px;
  }
  .left {
    width: 50%;
    overflow: visible;
  }
  .left p {
    line-height: 33px;
    padding-right: 60px;
    padding-left: 60px;
    /* margin: auto; */
    font-family: "Space Grotesk", sans-serif;
    font-size: 26px;
    overflow: visible;
    text-align: justify;
    padding-top: 40px;
    color: #e0ecc6;

    animation: fadeInUp 5s ease-in-out infinite;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0.7;
      transform: translateY(10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0px);
    }

    100% {
      opacity: 0.7;
      transform: translateY(10px);
    }
  }

  .about > img {
    height: 550px;
    width: 550px;
    filter: drop-shadow(-12px -12px 2px rgb(0, 0, 0));
    animation: rotateMotion 30s linear infinite;
    position: absolute;
    left: 80px;
    top: -20px;
    z-index: 999999;
  }
  @keyframes rotateMotion {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* schedule table */
  .schedule {
    height: auto;
    padding-bottom: 10px;
    color: white;
  }
  .head h1 {
    margin-top: 30px;
    text-align: center;
  }
  .scheduleTable {
    display: grid;
    grid-template-columns: repeat(3, auto);
    border: 1px solid rgba(245, 222, 179, 0.507);
    width: 65%;
    margin: 50px auto;
  }
  .tableBox {
    border: 1px solid rgba(245, 222, 179, 0.507);
    padding: 15px 8px;
    border-collapse: collapse;
    text-align: center;
  }
  .tableBox:nth-child(1),
  .tableBox:nth-child(2),
  .tableBox:nth-child(3) {
    background: #7d65ff92;
    font-weight: 600;
  }

  .bannerRegister {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 80px;
    width: 300px;
  }
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 90px;
    animation: glowing 1500ms infinite;
  }
  .registerButton {
    color: #0b0715;
    padding: 12px 27px;
    border: 2px solid white;
    border-radius: 90px;
    font-weight: 700;
    background-color: #a4d09c;
    border: #9cd0a1;
    animation: glowing 1300ms infinite;
    cursor: pointer;
  }

  @keyframes glowing {
    0% {
      background-color: #6fe9cc;
      box-shadow: 0 0 5px #a69cd0;
    }
    50% {
      background-color: #03b420;
      box-shadow: 0 0 20px #02ff78;
    }
    100% {
      background-color: #6fe9cc;
      box-shadow: 0 0 5px #a69cd0;
    }
  }
  @media screen and (max-width: 1000px) {
    .club {
      height: auto;
    }
    .twopart {
      flex-direction: column-reverse;
    }
    .msg {
      flex-direction: column;
      margin-left: 30px;
      gap: 10px;
      padding-top: 15px;
    }
    .leftside {
      width: 100%;
    }
    .rightside > img {
      width: 300px;
    }
    .twopart {
      display: flex;
      height: auto;
      width: 100vw;
    }
    .rightside {
      height: 370px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0px;
    }
    .leftside {
      width: 100%;
    }
    .leftside h1 {
      margin-left: 0px;
      font-size: 40px;
      text-align: center;
      text-align: center;
      padding-top: 0px;
    }
    .leftside > h3 {
      margin-left: 0px;
    }
    .work {
      font-size: 20px;
      text-align: center;
    }
    .workshop {
      font-size: 33px;
      text-align: center;
    }
    .msg {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #160e2a;
      margin-bottom: 50px;
      margin-left: 0px;
      text-align: center;
    }
    .msg1,
    .msg2 {
      gap: 10px;
      font-size: 15px;
    }

    .aboutWorkshop > h1 {
      font-size: 29px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 0px;
      text-align: center;
    }
    .about {
      flex-direction: column;
      margin: 0px 0px;
    }
    .left {
      width: 100%;
      margin-top: -30px;
    }
    .left p {
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
    .about img {
      position: relative;
      align-self: center;
      height: 60%;
      width: 60%;
      bottom: 0px;
      left: 1%;
      top: 5vh;
      filter: drop-shadow(-8px -8px 2px rgb(0, 0, 0));
    }
    .scheduleTable {
      width: 90%;
    }
    .head h1 {
      font-size: 29px;
    }
  }
`

const Banner = () => {
  return (
    <MainCont>
      <div style={{ backgroundColor: "#160e2a" }}>
        <div className="club">
          <div className="twopart">
            <div className="leftside">
              <h1>CLUB EXCEL</h1>
              <h3 className="work">One of the Top Coding</h3>
              <h3 className="work">Club in NIST University</h3>
              <h3 className="work">Represent </h3>
              <h3 className="workshop">Frontend Workshop</h3>
              <h3 className="workshop">Using React</h3>
            </div>
            <div className="rightside">
              <Image
                src="/Excel_Logo_Anim.gif"
                height={436}
                width={460}
                className="excellogo"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="msg">
            <div className="msg1">
              <IoTimeOutline />
              <p>15th March,2024 </p>
            </div>
            <div className="msg2">
              <IoLocation />
              <p>Galleria ,NIST University</p>
            </div>
          </div>
        </div>
        {/* about workshop */}

        <div className="aboutWorkshop">
          <h1>About Workshop</h1>
          <div className="about">
            <div className="left">
              <p>
                The Frontend Project Workshop organized by Club Excel is an
                immersive and hands-on experience aimed at providing
                participants with a solid foundation in web development. The
                workshop will cover essential technologies including HTML, CSS,
                JavaScript, and React, catering to both beginners and those
                looking to deepen their understanding.
              </p>

              <p>
                The workshop goes beyond individual skill development, fostering
                a sense of community through open discussions, Q&A sessions, and
                networking opportunities.
              </p>
            </div>

            <Image
              src="/reactjscss.png"
              alt=""
              srcset=""
              width={550}
              height={550}
            />
          </div>
        </div>
        {/* shedule */}
        <div className="schedule">
          <div className="head">
            <h1>Event Schedule</h1>
          </div>
          <div className="scheduleTable">
            <div className="tableBox">Date</div>
            <div className="tableBox">Program</div>
            <div className="tableBox">Timing</div>
            <div className="tableBox">15th March</div>
            <div className="tableBox">HTML, CSS , JS & REACT</div>
            <div className="tableBox">2-5pm</div>
          </div>
          <div className="bannerRegister">
            <Link
              href="/reactregister"
              className="register"
            >
              <button className="registerButton">REGISTER NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default Banner
