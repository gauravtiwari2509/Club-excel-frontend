import React from "react"
import styled from "styled-components"
import Image from "next/legacy/image"

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(2px);
  background:transparent;
  background-color: rgba(0, 0, 0, 0.7);

  .loader {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(90deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    75% {
      transform: rotateY(270deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`

const Loader = () => {
  return (
    <LoaderContainer>
      <Image
        src={"/clubexcellogo.png"}
        alt="Loading..."
        height={150}
        width={150}
        className="loader"
      />
    </LoaderContainer>
  )
}

export default Loader
