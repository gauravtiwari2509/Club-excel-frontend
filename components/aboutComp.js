import React from "react"
import styled from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
  .button {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    width: 214px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    cursor: pointer;
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
  }
  .vector-7 {
    background: url("/Vector 7.svg");
    width: 1449px;
    height: 256.676px;
    flex-shrink: 0;
    background-size: 1449px 256px;

    margin-left: -1390px;
    margin-top: -245px;
  }
  .vector-8 {
    background: url("/Vector 8.svg");
    width: 1445px;
    height: 266.75px;
    flex-shrink: 0;
    background-size: 1449px 256px;
    margin-left: -1449px;
    margin-top: 299px;
  }
`

function About() {
  return (
    <MainCont>
      <div>
        <Image
          src={"/club excel image.jpg"}
          height={557}
          width={624}
          alt="Image"
          className="abt-img"
        />
      </div>
      <div className="rightabtdiv">
        <div className="intro-text">ABOUT</div>
        <div className="intro">CLUB EXCEL</div>
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
        <div className="button pointer hover">
          <span className="send">LET’S GET IN TOUCH</span>
        </div>
      </div>
      <div className="vector-7"></div>
      <div className="vector-8"></div>
    </MainCont>
  )
}

export default About
