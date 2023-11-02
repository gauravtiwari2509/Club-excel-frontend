import React from "react"
import styled from "styled-components"
import Card from "@/components/Card"
import { v4 as uuidv4 } from "uuid"
import dynamic from "next/dynamic"
import Member from "@/components/member"
const Carroussel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
})

const MainCont = styled.div`

  
`

function Navbar() {
  return (
    <MainCont >
 
          <Member/>
           </MainCont>
  )
}

export default Navbar
