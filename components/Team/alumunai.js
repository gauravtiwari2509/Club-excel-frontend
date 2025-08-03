import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Card1 from "./Card1"
import { useInView } from "react-intersection-observer"
import { AlumunaiMembers } from "@/mock"

const MainCont = styled.div`
  margin-top: 50px;
  position: relative;
  margin-bottom: 500px;
  @media (min-width: 800px) and (max-width: 1440px) {
    transform: scale(0.5);
    margin-left: 0px;
    margin-top: -70px;
    margin-bottom: -200px;
  }
  @media (min-width: 2560px) {
    transform: scale(1.4);
    margin-top: 551px;
    margin-bottom: 380px;
  }

  @media (max-width: 799px) {
    margin-left: -708px;
    margin-top: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -70px;
  }
  .pnvm {
    @media (max-width: 799px) {
      margin-left: -130px;
    }
  }
  .partnven-box {
    margin-top: 81px;
    width: 1650px;
    display: flex;
    justify-content: center;
    @media (max-width: 799px) {
      margin-top: 0px;
      display: grid;
      justify-content: center;
      grid-template-columns: 120px 120px;
      grid-column-gap: 59.75px;
    }
  }

  .center-item-p {
    @media (max-width: 799px) {
      margin-left: 100px;
    }
  }
  .partnvent {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 799px) {
    }
  }

  .second {
    @media (max-width: 799px) {
      margin-top: -10px;
    }
  }
`

function Alumunai() {
  const [ref, inView] = useInView({
    // The key fix: `triggerOnce: true` ensures the inView state is set to true only once
    // when the element first enters the viewport.
    triggerOnce: true,
    // The animation will trigger when 10% of the component is visible.
    threshold: 0.1,
  })

  // We can now use the `inView` state directly from the hook, as it will never turn back to false.
  return (
    <MainCont>
      {/* The `ref` is now attached to the parent container, so the entire section
          is considered for the animation trigger. */}
      <div className="pnvm" ref={ref}>
        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box">
            {AlumunaiMembers.slice(0, 5).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[5]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            {AlumunaiMembers.slice(6, 10).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[5]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box second">
            {AlumunaiMembers.slice(10, 14).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[14]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[14]} />
            </div>
            {AlumunaiMembers.slice(15, 20).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box second">
            {AlumunaiMembers.slice(20, 24).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[24]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[24]} />
            </div>
            {AlumunaiMembers.slice(25, 30).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box">
            {AlumunaiMembers.slice(30, 35).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[35]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[35]} />
            </div>
            {AlumunaiMembers.slice(36, 40).map((member, index) => (
              <div key={index}>
                <Card1 data={member} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainCont>
  )
}

export default Alumunai
