import Head from "next/head"
import Image from "next/legacy/image"
import { Inter } from "next/font/google"
import { styled } from "styled-components"
import Intro from "@/components/intro"
import About from "@/components/aboutComp"
import dynamic from "next/dynamic"
import QuickContact from "@/components/quickContact"
import Hero from "@/components/Hero"
import WhyChoose from "@/components/whyChoose"
import Loader from "@/components/loder"
import { Suspense } from "react"
import { cards } from "@/mock"
import VideoAnimation from "@/components/VideoAnimation"

const Carroussel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
})
const ScrollSection = dynamic(() => import("@/components/ScrollSection"), {
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

  .Hero-div {
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export default function Home() {


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
      <Suspense fallback={<p>Loading . . .</p>}>
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
          <VideoAnimation/>
          <About />
          <div className="scrolly">
            <div className="flex-scrolly">
              <div className="intro-text">Our Domains</div>
              <div className="scrolly-arrow"></div>
            </div>
            <ScrollSection />
          </div>

          <div>
            <WhyChoose />
          </div>
          <div id="Gallary">
            <div className="Gal-head">Gallery</div>
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
      </Suspense>
    </>
  )
}
