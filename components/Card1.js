import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const StyleCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 259px;

  @media (max-width: 799px) {
    transform: scale(0.75);
  }
  .card1 {
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 320px;
    background: url("/card1.png");
    background-size: 230px 320px;
    background-repeat: no-repeat ;
  }

  .c-shadow {
    margin-top: 20px;
    width: 335px;
    height: 45px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(143, 168, 100, 0.406) 0%,
      rgba(104, 126, 67, 0) 72.4%
    );
  }

  .partner-card-txt {
    margin-top: 10px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    leading-trim: both;
    text-edge: cap;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
  }
  .card1-graphics{
    border-radius: 50%;
  }
`;


function Card1({ img, txt }) {
  return (
    <StyleCard1>
      <div className='card1'>
        <div className='partners-pic'>
          <Image
            className='card1-graphics'
            src={img}
            height={200}
            width={200}
            alt='Image'
          />
        </div>
        <div className='partner-card-txt'>{txt}</div>
      </div>
      <div className='c-shadow'></div>
    </StyleCard1>
  );
}

export default Card1;
