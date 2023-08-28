import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { useRouter } from "next/router"

const MainCont = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 84px;
  }
  .club-txt {
    margin-left: 20px;
    background: -webkit-linear-gradient(#c0b7e8, #8176af);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .nav-link {
    display: flex;
    gap: 42px;
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .button1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 154px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 40px;
    border: 2px solid #fff;
  }

  .button1,
  .button2 {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .button1:hover {
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    transition: 0.5s;
    border: none;
    transform: scale(1.08);
  }

  .button2 {
    width: 155px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 40px;
  }
  .logo-img {
    display: flex;
    align-items: center;
  }
  .nav-line {
    width: 100vw;
    border: 1px solid #fff;
  }
`

function Navbar() {
  const router = useRouter()
  return (
    <MainCont>
      <div className="navbar">
        <div className="logo-img">
          <Image
            src={"/clubexcellogo.png"}
            height={70}
            width={70}
            alt="logo"
          />
          <div className="club-txt">Club Excel</div>
        </div>

        <div className="nav-link">
          <div className="pointer hover">ABOUT</div>
          <div className="pointer hover">SERVICES</div>
          <div className="pointer hover">TECHNOLOGIES</div>
          <div className="pointer hover">HOW TO</div>
        </div>
        <div
          className="button1"
          onClick={() => router.push("/contact")}
        >
          CONTACT US
        </div>
      </div>
      <div className="nav-line"></div>
    </MainCont>
  )
}

export default Navbar
