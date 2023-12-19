import React from "react";
import Image from "next/image";
import styled  from 'styled-components';
import { motion } from 'framer-motion';


const StyleAdvisorCard = styled(motion.div)`
  width: 501px;
  height: 266px;
  background-image: url("/card1.png");
  background-size:501px 266px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    width: 300px;
    flex-direction: column;
    height: 400px;
    background: none;
    text-align: center;
  }

  position: relative;
  .blurred-img {
    background: linear-gradient(
      148.46deg,
      rgba(217, 217, 217, 0.2) 16.36%,
      rgba(217, 217, 217, 0) 98.75%
    );
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 0.1px solid #bef56e;
   
    @media (max-width: 800px) {
      background: linear-gradient(
          -91deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        linear-gradient(180deg, #b7d383 0%, #5a6f38 100%);
      opacity: 0.7;
      width: 260px;
      height: 338px;

      left: 50%;
    }
  }

  .left-div {
    width: 190px;
    height: 190px;
    margin-left: 30px;
    font-size: 19.2894px;
    line-height: 34px;
    z-index: 2;

    @media (max-width: 800px) {
      margin-left: 0px;
      transform: scale(0.7);
      margin-top: -50px;
    }
  }

  .right-div {
    margin-left: 30px;
    z-index: 2;
    height: 125px;

    @media (max-width: 800px) {
      margin-left: 0px;
    }

    .name {
      color: white;
      margin-top: 20px;
      font-family: Montserrat;
      font-style: normal;
      font-size: 25px;

      @media (max-width: 800px) {
        margin-top: -30px;
        font-size: 20px;
      }
    }
    .position {
      font-size: 15.2707px;
      color: #fff;
      margin-top: 5px;
      font-family: "Montserrat";
      font-size: 20px;

      @media (max-width: 800px) {
        font-size: 18px;
      }
    }

    .linkedin-logo {
      margin-top: 10px;
    }
  }

  .btm-shadow {
    width: 500px;
    height: 45px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(143, 168, 100, 0.406) 0%,
      rgba(104, 126, 67, 0) 72.4%
    );
    position: absolute;
    top: 100%;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;





export default function AdvisorCard({
  imagesrc,
  name,
  position,
  linkedInLink,
  animate,
}) {



  return (
    <StyleAdvisorCard
      transition={{ duration: 1.5 }}
      animate={{
        opacity: animate ? 1 : 0,
        transform: animate
          ? "translateX(0%) rotate(0deg)"
          : "translateX(-100%) rotate(-45deg)",
      }}
      className='frfsc'
    >
      <div className='left-div frcc'>
        <Image
          src={imagesrc}
          alt='Advisor'
          className='core-img'
          height={170}
          width={170}
          style={{borderRadius:"50%"}}
        />
      </div>

      <div className='right-div '>
        <div className='name'>{name}</div>

        <div className='position'>{position}</div>

        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/rajk-bs/");
          }}
          className='position pointer'
        >

        </div>
      </div>

      <div className='btm-shadow'></div>
    </StyleAdvisorCard>
  );
}
