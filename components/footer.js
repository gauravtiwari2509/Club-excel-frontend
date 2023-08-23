import React from "react"
import styled from "styled-components"

const MainCont = styled.div`
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.82px;
  }
`

function Footer() {
  return (
    <MainCont>
      <div className="footer">
        2023 © Club Excel LANDING PAGE - Abhinav Kumar - ALL RIGHTS RESERVED{" "}
      </div>
    </MainCont>
  )
}

export default Footer
