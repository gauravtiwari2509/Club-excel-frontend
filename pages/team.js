import Alumunai from "@/components/alumunai"
import Button from "@/components/button"
import Member from "@/components/member"
import React, { useState } from "react"
import styled from "styled-components"

const MainCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .team-heading {
    margin-top: 100px;
    margin-bottom: 20px;
    font-family: "Poppins";
    color: white;
    font-weight: 400;
    font-size: 40px;
    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  .shift-left {
    margin-left: -955px;

    @media (max-width: 800px) {
      margin-left: -20px;
      margin-bottom: 0;
    }
    @media (min-width: 800px) and (max-width: 1440px) {
      transform: scale(0.5);
      margin-left: -525px;
      margin-bottom: -400px;
    }
  }
`

function Team() {
  const [state, setState] = useState()
  function handleState() {
    setState(!state)
  }

  return (
    <MainCont>
      <div className="shift-left">
        <div className="team-heading">
          Our Team {state ? "Alumunai" : " Members"}
        </div>

        <Button handleState={handleState} />
      </div>
      {!state ? <Alumunai /> : <Member />}
    </MainCont>
  )
}

export default Team
