import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { IoLocation } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import Image from "next/image"
// import LightGithub from "../LightGithub"

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
    display:flex;
    flex-direction: column;
    gap: 15px;

  }
  .leftside h1 {
    margin-left: 150px;
    font-size: 65px;
    color: #437bf4;
    padding-top: 110px;
    background-color: #160e2a;
    animation: fadeLeftToRight 3s ease-in-out infinite;
  }


  .leftside > h3 {
    margin-left: 150px;
  }
  .work {
    color: #ffffff;
    line-height: 30px;
    font-size: 25px;
    line-height: 35px;
    animation: flicker 1.1s infinite;
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
    height: auto;
    background-color: #1b0d3a;
  }
  .aboutWorkshop > h1 {
    padding-top: 30px;
    text-align: center;
    margin-bottom: 25px;
    color: #c0c0c0;
    text-decoration: underline;
    text-underline-offset: 10px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 3.1em;
    text-shadow: -10px -5px 1px rgb(16, 6, 6);
    font-weight: 530;

  }
  .about {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    position: relative;
    flex-direction: row-reverse;
    overflow: hidden;
  }
  .left {
    flex:1;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
  }
  .left p {
    line-height: 33px;
    padding-right: 60px;
    padding-left: 60px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 25px;
    overflow: visible;
    text-align: justify;
    color: #D3D3D3;
  }

.githubLogo{
  overflow: hidden;
  height: 500px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .githubLogo >img {
    height: auto;
    width: 70%;
    filter: drop-shadow(-12px -12px 2px rgb(0, 0, 0));
    animation: rotateMotion 15s linear infinite ;

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
    color: #c0c0c0;
    text-decoration: underline;
    text-underline-offset: 10px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 3.1em;
    text-shadow: -10px -5px 1px rgb(16, 6, 6);
    font-weight: 530;
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

  .GithubWorkshopRegister {
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
    cursor: pointer;
    color: white;
    font-size: large;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 90px;
    border: none;
    background-color: #03b420;
    animation: glowing 1500ms infinite;
  }
  .registerButton {
    color: #0b0715;
    padding: 12px 27px;
    border: 2px solid white;
    border-radius: 90px;
    font-weight: 700;
    background-color: red;
    border: #9cd0a1;
    /* animation: glowing 1300ms infinite; */
    cursor: pointer;
  }


  @media screen and (max-width: 1000px) {
    .club {
      height: auto;
    }
    
    .twopart {
      flex-direction: column-reverse;
      display: flex;
      height: auto;
      width: 100vw;
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
      height: auto;
    }
   
    .rightside {
      height: 370px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0px;
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
    .aboutWorkshop{
      padding-bottom:40px;
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
      /* margin-top: -30px; */
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

  @keyframes glowing {
    0% {
      /* background-color: #6fe9cc; */
      box-shadow: 0 0 5px #a69cd0;
    }
    50% {
      /* background-color: #03b420; */
      box-shadow: 0 0 20px #02ff78;
    }
    100% {
      /* background-color: #6fe9cc; */
      box-shadow: 0 0 5px #a69cd0;
    }
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
  @keyframes flicker {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
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
  @keyframes rotateMotion {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`

const GithubWorkshop = () => {
  return (
    <MainCont>
      <div style={{ backgroundColor: "#160e2a" }}>
        <div className="club">
          <div className="twopart">
            <div className="leftside">
              <h1>GIT & GITHUB WORKSHOP</h1>
              <h3 className="work">Master GitHub for Version Control <br /> and collaboration</h3>
              <h3 className="workshop">Hosted by Club Excel</h3>
            </div>
            <div className="rightside">
              <Image
                src="/Excel_Logo_Anim.gif"
                height={436}
                width={460}
                
                className="excellogo"
                alt="GitHub Workshop Logo"
              />
            </div>
          </div>
          <div className="msg">
            <div className="msg1">
              <IoTimeOutline />
              <p>14th February : 03:00-05:00 PM</p>
            </div>
            <div className="msg2">
              <IoTimeOutline />
              <p>15th February : 02:00-05:00 PM</p>
            </div>
            <div className="msg2">
              <IoLocation />
              <p>Galleria, NIST University</p>
            </div>
          </div>
        </div>

        <div className="aboutWorkshop">
          <h1>Why Join this Workshop?</h1>
          <div className="about">
            <div className="left" >
              <p>
                The GitHub Workshop organized by Club Excel is designed to help participants
                master GitHub, a powerful platform for version control and collaboration.
                This workshop will cover essential Git commands, GitHub workflows, and best practices,
                helping attendees manage and share their code efficiently.
              </p>

              <p>
                Participants will gain hands-on experience with creating repositories, branching,
                committing changes, and collaborating on projects using pull requests.
              </p>
            </div>

            <div className="githubLogo">
              <img
                src="/event/github2.svg"
                alt="GitHub Logo"
              />
            </div>

          </div>
        </div>


        <div className="schedule">
          <div className="head">
            <h1>Event Schedule</h1>
          </div>
          <div className="scheduleTable">
            <div className="tableBox">Date</div>
            <div className="tableBox">Program</div>
            <div className="tableBox">Timing</div>
            <div className="tableBox">14th February</div>
            <div className="tableBox">Introduction to Git & GitHub</div>
            <div className="tableBox">03:00-05:00 PM</div>
            <div className="tableBox">15th February</div>
            <div className="tableBox">Advanced GitHub Workflows</div>
            <div className="tableBox">02:00-05:00 PM</div>
          </div>
          <div className="GithubWorkshopRegister">
            <Link href='/githubregister' className="register">register</Link>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default GithubWorkshop
