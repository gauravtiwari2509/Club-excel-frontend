import React, { useState } from "react"
import styled from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  .box {
    height: 667px;
    flex-shrink: 0;
    @media (max-width: 800px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .content {
    padding-left: 65px;

    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      padding: 20px;
      align-items: center;
    }
  }
  .llabel {
    top: 115px;
    color: #8d8d8d;
    font-family: "Poppins";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    @media (max-width: 800px) {
      text-align: center; /* Center text on all screens */
    }
  }
  .rlabel {
    color: #8d8d8d;
    font-family: "Poppins";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  .send {
    color: #fff;
    text-align: center;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .button {
    align-self: flex-end;
    width: 214px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    height: 54px;
    border-radius: 5px;
    background: #011c2a;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      margin-top: 20px; /* Add some space at the top on small screens */
    }
  }
  .button:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .letter-send {
    width: 240.788px;
    height: 112.305px;
    flex-shrink: 0;
    margin-left: 400px;
  }
  .line {
    margin-bottom: 45px;
    width: 278px;
    height: 0px;
    flex-shrink: 0;
    border: 1px solid #8d8d8d;
    fill: #8d8d8d;
    stroke-width: 1px;
    stroke: #8d8d8d;
    @media (max-width: 800px) {
      margin-bottom: 20px; /* Reduce margin on small screens */
      width: 100%; /* Full width on small screens */
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 278px 278px;
    grid-column-gap: 40px;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column; /* Stack columns on small screens */
      align-items: center;
    }
  }
  input {
    color: #8d8d8d;
    outline: none;
    width: 279px;
    margin-top: 2px;
    border-style: none;
    padding: 5px;
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      margin-top: 10px; /* Adjust margin on small screens */
      border-style: none; /* Add border for input fields */
      padding: 10px; /* Increase padding for better touch usability */
    }
  }
  .place {
    margin-right: 243px;
    margin-top: 60px;
    @media (max-width: 800px) {
      margin: 0; /* Remove margin on small screens */
    }
  }
  .Select-head {
    width: 109px;
    height: 20.37px;
    flex-shrink: 0;
    color: #011c2a;
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 20px; /* 142.857% */
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      font-family: "Poppins";
      text-align: center; /* Center text on all screens */
    }
  }
  .tick-box {
    width: 13px;
    height: 13.241px;
    flex-shrink: 0;
  }
  .option {
    width: 92px;
    height: 20.37px;
    flex-shrink: 0;
    color: #011c2a;
    font-family: "Poppins";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      text-align: center; /* Center text on all screens */
    }
  }

  .msg {
    color: #8d8d8d;
    font-family: "Poppins";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    margin-top: 45px;
    @media (max-width: 800px) {
      text-align: center; /* Center text on all screens */
      margin-top: 20px; /* Adjust margin on small screens */
    }
  }
  .message {
    width: 595px;
    flex-shrink: 0;
    fill: #8d8d8d;
    stroke-width: 1px;
    stroke: #8d8d8d;
    border-style: none;
    padding: 5px;
    outline: none;
    margin-top: 6px;
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      border: 1px solid #8d8d8d; /* Add border for the message input */
      padding: 10px; /* Increase padding for better touch usability */
      margin-top: 10px; /* Adjust margin on small screens */
    }
  }
  .choice {
    margin-top: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .choice-box {
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column; /* Stack columns on small screens */
      align-items: flex-start; /* Align items to the start on small screens */
      margin-left: 0; /* Remove left margin on small screens */
    }
  }
  .line1 {
    margin-top: 2px;
    margin-bottom: 45px;
    width: 595px;
    height: 0px;
    flex-shrink: 0;
    fill: #8d8d8d;
    stroke-width: 1px;
    stroke: #8d8d8d;
    border: 1px solid #8d8d8d;
    @media (max-width: 800px) {
      margin-top: 10px; /* Adjust margin on small screens */
      margin-bottom: 20px; /* Reduce margin on small screens */
      width: 100%; /* Full width on small screens */
    }
  }
  .letter_send {
    width: 240.788px;
    height: 112.305px;
    transform: rotate(-19.753deg);
    flex-shrink: 0;
    background: url("/letter_send.png");
    background-size: 240.788px 112.305px;
    margin-top: 20px;
    margin-left: 300px;
    @media (max-width: 800px) {
      width: 100%; /* Full width on small screens */
      max-width: 240.788px;
      height: auto;
      background-size: contain; /* Ensure image fits within the container */
      margin-top: 10px; /* Adjust margin on small screens */
      margin-left: 0; /* Remove left margin on small screens */
    }
  }
`

function RightContact() {
  const [select, setSelect] = useState(0)

  return (
    <MainCont>
      <div className="box">
        <div className="content">
          <div className="grid place">
            <div className="item">
              <div className="llabel">First Name</div>
              <input />

              <div className="line"></div>
            </div>
            <div className="item">
              <div className="rlabel">Last Name</div>
              <input />
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="llabel">Email</div>
              <input />
              <div className="line"></div>
            </div>
            <div className="item">
              <div className="rlabel">Phone Number</div>
              <input />
              <div className="line"></div>
            </div>
          </div>
          <div className="Select-head">
            <h3>Select Subject?</h3>
          </div>
          <div className="choice-box">
            <div className="choice">
              <Image
                className="tick-box"
                src={select === 1 ? "/solid-tick.svg" : "/tick-circle.svg"}
                onClick={() => setSelect(1)}
                height={14}
                width={13}
                alt="select"
              />
              <p className="option">General Inquiry</p>
            </div>
            <div className="choice">
              <Image
                className="tick-box"
                src={select === 2 ? "/solid-tick.svg" : "/tick-circle.svg"}
                onClick={() => setSelect(2)}
                height={14}
                width={13}
                alt="select"
              />
              <p className="option">General Inquiry</p>
            </div>
            <div className="choice">
              <Image
                className="tick-box"
                src={select === 3 ? "/solid-tick.svg" : "/tick-circle.svg"}
                onClick={() => setSelect(3)}
                height={14}
                width={13}
                alt="select"
              />
              <p className="option">General Inquiry</p>
            </div>
            <div className="choice">
              <Image
                className="tick-box"
                src={select === 4 ? "/solid-tick.svg" : "/tick-circle.svg"}
                onClick={() => setSelect(4)}
                height={14}
                width={13}
                alt="select"
              />
              <p className="option">General Inquiry</p>
            </div>
          </div>
          <div className="msg">Message</div>
          <input
            className="message"
            type="message"
          />
          <div className="line"></div>
          <div className="button dis">
            <span className="send">Send Message</span>
          </div>
          <div className="letter_send"></div>
        </div>
      </div>
    </MainCont>
  )
}

export default RightContact
