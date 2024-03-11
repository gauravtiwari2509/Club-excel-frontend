import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { styled } from "styled-components"
import Image from "next/image"

const MainCont = styled.div`
  .image-frame {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: fit-content;
    border-radius: 10px;
    object-fit: cover;
  }
`

function Card({ imagen }) {
  const [show, setShown] = useState(false)

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  })
  return (
    <MainCont>
      <animated.div
        className={"card"}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <Image
          className="image-frame"
          src={imagen}
          alt="image"
          height={200}
          width={400}
        />
      </animated.div>
    </MainCont>
  )
}

export default Card
