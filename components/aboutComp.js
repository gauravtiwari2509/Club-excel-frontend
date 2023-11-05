import React, { useState } from "react"
import styled from "styled-components"

const MainCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    transform: scale(0.6);
    margin-top: -300px;
  }
  .intro1 {
    display: flex;
  }
  .intro-text {
    margin-bottom: 5px;
    color: #fff;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .intro {
    color: #fff;
    font-family: Montserrat;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .arrow {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    background: url("/arrow-right.svg");
  }
  .text {
    line-height: 0.9cm;
    margin-bottom: 28px;
    margin-top: 42px;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    width: 652px;
    @media (max-width: 800px) {
      width: 360px;
      text-align: center;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    position: relative;
    z-index: 10;

    width: 214px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    cursor: pointer;
    @media (max-width: 800px) {
      align-self: center;
    }
  }

  .button:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  .abt-img {
    position: relative;
    border-radius: 100px 240px;
    background: #a3a3a3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 3;
  }
  .rightabtdiv {
    margin-left: 108px;
    @media (max-width: 800px) {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .vector-7 {
    background: url("/Vector 7.svg");
    width: 1449px;
    height: 256.676px;
    flex-shrink: 0;
    background-size: 1449px 256px;

    margin-left: -1390px;
    margin-top: -245px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .vector-8 {
    background: url("/Vector 8.svg");
    width: 1445px;
    height: 266.75px;
    flex-shrink: 0;
    background-size: 1449px 256px;
    margin-left: -1449px;
    margin-top: 299px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .upar {
    position: relative;
    z-index: 10;
    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
    }
  }
  video {
    margin-top: 100px;
    @media (max-width: 800px) {
      transform: scale(0.6);
    }
  }
  .for-mob {
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }
  return (
    <MainCont>
      <div className="upar">
        <video
          autoPlay={isVideoPlaying} // Only autoplay when isVideoPlaying is true
          loop
          style={{ width: "600px", height: "300px" }}
          className="video"
          onClick={handleVideoClick}
        >
          <source src="/clubexcel intro.mp4" />
        </video>
      </div>
      <div className="rightabtdiv">
        <div className="for-mob">
          <div className="intro-text">ABOUT</div>
          <div className="intro">CLUB EXCEL</div>
        </div>
        <div className="text">
          Club Excel stands as a premier coding club within the National
          Institute of Science and Technology (NIST), recognized for its
          outstanding contributions and achievements in various domains of
          technology. With a primary focus on full stack development,
          application development, cloud computing, and AI/ML (Artificial
          Intelligence/Machine Learning), Club Excel provides an exceptional
          platform for students to cultivate their technical skills, collaborate
          on innovative projects, and prepare for a tech-driven future.
        </div>
        <div className="button pointer hover " onClick={()=>(window.open("https://instagram.com/_club_excel_?igshid=bG40ZnMxd3lwNDcz"))}>
          <span className="send ">LET’S GET IN TOUCH</span>
        </div>
      </div>
      <div className="vector-7 nicha"></div>
      <div className="vector-8"></div>
    </MainCont>
  )
}

export default About
