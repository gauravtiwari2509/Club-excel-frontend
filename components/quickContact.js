import React from "react"
import styled from "styled-components"

const MainCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 88px;
  .bg {
    width: 1272px;
    height: 167px;
    flex-shrink: 0;
    background: url("/Rectangle 6.svg");
    border-radius: 90px;
    background: radial-gradient(
      2900.76% 50.13% at 50% 53.89%,
      rgba(58, 52, 86, 0.95) 0%,
      #211e2e 100%
    );
    box-shadow: 0px 4px 4px 0px rgba(192, 183, 232, 0.01);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .loc {
    background: url("/location.svg");
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    background-repeat: no-repeat;
  }
  .bold-text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .flex {
    display: flex;

    align-items: center;
  }
  .phone {
    background: url("/phone-call.svg");
    width: 59px;
    height: 59px;
    flex-shrink: 0;
    color: #c0b7e8;
  }
  .mail {
    background: url("/mail.svg");
    width: 59px;
    height: 59px;
    flex-shrink: 0;
    color: #c0b7e8;
  }
  .gap {
    gap: 20px;
  }
`

function QuickContact() {
  return (
    <MainCont>
      <div className="bg">
        <div className="flex">
          <div className="loc"></div>
          <div className="bold-text">
            Pay Us a Visit
            <div className="text">
              Union St, Seattle, WA 98101, United States
            </div>
          </div>
        </div>
        <div className="flex gap">
          <div className="phone"></div>
          <div className="bold-text">
            Give Us a Call
            <div className="text">(110) 1111-1010</div>
          </div>
        </div>
        <div className="flex gap">
          <div className="mail"></div>
          <div className="bold-text">
            Send Us a Message
            <div className="text">Contact@HydraVTech.com</div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default QuickContact
