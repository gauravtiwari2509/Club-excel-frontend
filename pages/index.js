import Head from "next/head"
import Image from "next/legacy/image"
import { Inter } from "next/font/google"
import { styled } from "styled-components"
import Intro from "@/components/intro"
import About from "@/components/aboutComp"
import dynamic from "next/dynamic"
import QuickContact from "@/components/quickContact"
import WhyChoose from "@/components/whyChoose"

import { v4 as uuidv4 } from "uuid"
import Hero from "@/components/Hero"
import ScrollSection from "@/components/ScrollSection"

const Carroussel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
})
const Card = dynamic(() => import("@/components/Card"), {
  ssr: false,
})

const inter = Inter({ subsets: ["latin"] })

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro-comp {
    margin-top: 100px;
    margin-bottom: 100px;
    @media (max-width: 800px) {
      margin-bottom: 0;
    }
  }
  .Hero-div {
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .Gal-head {
    color: #fff;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 200px;
    @media (max-width: 800px) {
      margin-bottom: -50px;
    }
    @media (min-width: 801px) and (max-width: 1200px) {
      margin-top: -100px;
    }
  }

  #Gallary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function Home() {
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
    {
      key: uuidv4(),
      content: <Card imagen="/p7.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p8.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p9.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p10.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p11.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p12.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p13.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/p14.jpg" />,
    },
  ]

  return (
    <>
      <Head>
        <title>Club Excel</title>
        <meta
          name="Club Excel"
          content="Popularising coding among Gen Z"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/clubexcellogo.png"
        />
      </Head>
      <MainCont>
        <Hero />
        <div id="about">
          <QuickContact />
        </div>

        <div className="bg1"></div>
        <div className="bg2"></div>
        <div className="bg3"></div>
        <div className="hero-4"></div>

        <div className="intro-comp">
          <Intro />
        </div>
        <div>
          <About />
        </div>
        <div>
          <ScrollSection/>
        </div>
        <div>
          <WhyChoose />
        </div>
        <div id="Gallary">
          <div className="Gal-head">Gallary</div>
          <Carroussel
            cards={cards}
            height="500px"
            width="50%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </MainCont>
    </>
  )
}
