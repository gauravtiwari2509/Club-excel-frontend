import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

import Link from "next/link"
import styled from "styled-components"
const MainCont = styled.div`
  .animatecard {
    position: relative;
    height: 550px;
    width: 390px;
    padding-bottom: 30px;
    border-radius: 0.75rem;
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
    background: linear-gradient(to bottom right, #4f46e5, #9f7aea);
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    @media (max-width: 800px) {
      height: 53vh;
      width: 70vw;
    }
  }

  .animatecardCont {
    position: absolute;
    padding-bottom: 30px;
    inset: 1rem;
    display: grid;
    row-gap: 1rem;
    place-items: center;
    place-content: center;
    color: white;
    border-radius: 0.75rem;

    background-color: #151d51;

    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .animatecardCont img {
    max-height: 66.667%;
    @media (max-width: 800px) {
      max-width: 66.77%;
    }
  }
  .animatecardCont div {
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    --tw-text-opacity: 1;
    text-align: center;
    color: #7a9be8;
  }
  .animatecardCont button {
    border-radius: 0.375rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;

    /* Text color */
    color: #93c5fd; /* Specific color value for text-blue-200 */

    /* Background color */
    background-color: #151d51; /* Specific color value for bg-slate-900 */

    /* Border color */
    border-color: #e2e8f0; /* Specific color value for border-gray-300 */

    /* Transition properties */
    transition-property: transform;
    transition-duration: 150ms; /* 0.15s */
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    /* Hover effect */
    &:hover {
      transform: scale(1.05);
    }

    /* Focus styles */
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Specific color value for focus:border-blue-300 */
      border-color: #93c5fd; /* Specific color value for focus:border-blue-300 */
    }
  }
`

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

const TiltCard = (props) => {
  const { imgSrc, time, date, link, eventName, eventPlace } = props

  const ref = useRef(null)

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rY = mouseX / width - HALF_ROTATION_RANGE
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <MainCont>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "-15px 20px 50px #0C4E8B  ",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        className="animatecard"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="animatecardCont"
        >
          <img
            src={imgSrc}
            alt="img"
            className="round-image"
          />
          <div>{eventName}</div>
          <div>{time}</div>
          <div>{date}</div>
          <div>{eventPlace}</div>
          <Link href={link}>
            <button className="registerButton text-blue-200 border  bg-slate-900 border-gray-300 transform transition-transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
              REGISTER
            </button>
          </Link>
        </div>
      </motion.div>
    </MainCont>
  )
}

export default TiltCard
