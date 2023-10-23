import React from "react"
import styled from "styled-components"
import RoundBall from "./roundball"

const MainCont = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px;
  }
  .intro-text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 36px;
    font-style: normal;
    font-weight: bolder;
    line-height: normal;
  }

  .arrow {
    margin-left: 30px;
    width: 228px;
    height: 100px;
    flex-shrink: 0;
    background: url("/big arrow.svg");
    background-size: 228px 100px;
    @media (max-width: 800px) {
      margin: 10px;
    }
  }
  .text {
    margin-top: -23px;
    margin-left: 111px;

    color: #fff;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 0.6cm;
    width: 652px;
  }
  .intro {
    margin-top: -20px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Montserrat";
    font-size: 30px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
`

function Intro() {
  return (
    <MainCont>
      <div className="flex">
        <div className="intro-text">INTRODUCTION</div>
        <div className="intro">
          TO CLUB EXCEL <div className="arrow"></div>
        </div>
      </div>
      <div className="text">
        Club Excel stands as a premier coding club within the National Institute
        of Science and Technology (NIST), recognized for its outstanding
        contributions and achievements in various domains of technology. With a
        primary focus on full stack development, application development, cloud
        computing, and AI/ML (Artificial Intelligence/Machine Learning), Club
        Excel provides an exceptional platform for students to cultivate their
        technical skills, collaborate on innovative projects, and prepare for a
        tech-driven future.
      </div>
    </MainCont>
  )
}

export default Intro
