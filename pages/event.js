import TiltCard from "@/components/EventCard/EventCard"
import React from "react"
import styled from "styled-components"
const MainCont = styled.div`
  .eventCardContiner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    gap: 40px;
    background: rgb(24, 0, 85);
    background: radial-gradient(
      circle,
      rgba(24, 0, 85, 1) 0%,
      rgba(22, 14, 42, 1) 100%
    );
    @media (max-width: 1300px) {
      height: auto;
      display: flex;
      flex-direction: column;
      margin-top: 50px;
    }
  }
`

const EventPage = () => {
  return (
    <MainCont>
      <div className="eventCardContiner">
        <TiltCard
          eventName="GIT/GITHUB WORKSHOP"
          imgSrc="/event/github.svg"
          time="03:00 PM -05:00 PM / 02:00 PM -05:00 PM "
          date="14-15th FEBRUARY"
          eventPlace="GALARIA AUDITORIUM"
          link="/githubworkshop"
        />

        {/* <TiltCard
          eventName="AMONG US"
          imgSrc="/event/Among.png"
          time="11:00 AM-12:00 PM"
          date="22 MARCH"
          eventPlace="ATRIUM"
          link="/event"
        />
        <TiltCard
          eventName="CODE CRUSADE"
          imgSrc="/event/codeCrusade.png"
          time="11:00 AM-02:00 PM"
          date="22 MARCH"
          eventPlace="ATRIUM CC"
          link="/event"
        /> */}
      </div>
    </MainCont>
  )
}

export default EventPage
