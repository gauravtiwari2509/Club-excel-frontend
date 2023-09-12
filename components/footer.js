import React from "react"
import styled from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 50px;
    padding-bottom: 50px;

    margin-top: 50px;
    left: 0;
    bottom: 0;
    width: 100vw;
    text-align: center;
    color: #fff;
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.82px;
  }
  .vector-17 {
    margin-top: 50px;
    margin-bottom: 10px;
    background: url("/Vector 17.svg");
    width: 1269px;
    height: 5px;
    flex-shrink: 0;
    color: linear-gradient(#343045, #c0b7e8, #8176af, #343045);
    margin-bottom: 50px;
  }
  .vector-20 {
    background: url("/Vector 20.svg");
    width: 5px;
    height: 196px;
    flex-shrink: 0;
  }
  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 90px;
    padding-right: 90px;
  }
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .button {
    display: flex;
    justify-content: center;

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
  .send {
    color: #343045;
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .social {
    display: flex;
    gap: 20px;
  }
`

function Footer() {
  return (
    <MainCont>
      <div className="footer">
        <div className="flex">
          <div className="logo-img">
            <Image
              src={"/clubexcellogo.png"}
              height={185}
              width={185}
            />
          </div>
          <div className="vector-20"></div>
          <div className="link">
            <div className="pointer hover">ABOUT</div>
            <div className="pointer hover">SERVICES</div>
            <div className="pointer hover">TECHNOLOGIES</div>
            <div className="pointer hover">HOW TO</div>
          </div>
          <div className="vector-20"></div>

          <div className="link">
            <div className="pointer hover">ABOUT</div>
            <div className="pointer hover">SERVICES</div>
            <div className="pointer hover">TECHNOLOGIES</div>
            <div className="pointer hover">HOW TO</div>
          </div>
          <div className="vector-20"></div>
          <div className="link">
            <div className="text">SOCIALIZE WITH CLUB EXCEL</div>
            <div className="social">
              <div className="pointer hover">
                <Image
                  src={"/instagram.svg"}
                  height={32}
                  width={32}
                />
              </div>
              <div className="pointer hover">
                <Image
                  src={"/twitter1.svg"}
                  height={32}
                  width={32}
                />
              </div>
              <div className="pointer hover">
                <Image
                  src={"/facebook.svg"}
                  height={32}
                  width={32}
                />
              </div>
              <div className="pointer hover">
                <Image
                  src={"/linkedin.svg"}
                  height={32}
                  width={32}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/club-excel-nist/"
                    )
                  }
                />
              </div>
            </div>

            <div className="button">
              <span className="send">BUILD YOUR WORLD</span>
            </div>
          </div>
        </div>
        <div className="vector-17"></div>
        2023 © Club Excel - ALL RIGHTS RESERVED{" "}
      </div>
    </MainCont>
  )
}

export default Footer
