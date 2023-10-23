import React from "react"
import styled from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  width: fit-content;
  margin-right: -800px;
  .rightHero {
  }
`

function RightHero() {
  return (
    <MainCont>
      <div className="rightHero">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={426}
          width={490}
        />
      </div>
    </MainCont>
  )
}

export default RightHero
