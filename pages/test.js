import React from "react"
import styled from "styled-components"
import Card from "@/components/Card"
import { v4 as uuidv4 } from "uuid"
import dynamic from "next/dynamic"
import Hero from "@/components/Hero"
import WhyChoose from "@/components/whyChoose"
import Team from "@/components/team"
const Carroussel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
})

const MainCont = styled.div`
margin-top: 400px;
display: flex;
justify-content: center;
`

function test() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen="/p1.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p2.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p3.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p4.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p5.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p6.jpg" />,
    },
  ]
  return (
    <MainCont >
 
          <Team/>
           </MainCont>
  )
}

export default test
