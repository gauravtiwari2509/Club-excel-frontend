import React, { useState } from "react"
import styled from "styled-components"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import Link from "next/link"

const MainCont = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 84px;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 20px;
    }
  }
  .ntxt {
    color: white;
    text-decoration: none;
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

    @media (max-width: 800px) {
      margin-left: 0;
      margin-bottom: 10px;
      text-align: center;
    }
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

    @media (max-width: 800px) {
      display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      background-color: #343045;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 20px 0;
    }
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
    cursor: pointer;

    @media (max-width: 800px) {
      margin-top: 10px;
    }
  }

  .button1,
  .button2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button1:hover {
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    transition: 0.5s;
    border: none;
    transform: scale(1.08);
  }

  .logo-img {
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 800px) {
      margin-left: 0;
    }
  }

  .nav-line {
    width: 100vw;
    border: 1px solid #fff;
  }

  .menu-button {
    display: none;

    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      display: block;
      color: #fff;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
      background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
      transition: 0.5s;
      border: none;
      transform: scale(1.08);
    }
  }
`

function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <MainCont menuOpen={menuOpen}>
      <div className="navbar">
        <div
          className="logo-img"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/clubexcellogo.png"}
            height={70}
            width={70}
            alt="logo"
          />
          <div className="club-txt">Club Excel</div>
        </div>

        <div className="nav-link">

          <div
            className="pointer hover ntxt"
            onClick={()=>{router.push('/');closeMenu();}}            
          >
            HOME
          </div>

          <div
            className="pointer hover"
            onClick={() => router.push("/register")}
          >
            REGISTER
          </div>
        
            <div
              className="pointer hover ntxt"
              onClick={()=>{router.push('/team');closeMenu();}}
            >
              OUR TEAM
            </div>
        </div>
        <div
          className="button1"
          onClick={() => router.push("/contact")}
        >
          CONTACT US
        </div>

        <div
          className="menu-button"
          onClick={toggleMenu}
        >
          MENU
        </div>
      </div>
      <div className="nav-line"></div>
    </MainCont>
  )
}

export default Navbar
