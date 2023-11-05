import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Card1 from './Card1';
import { useInView } from 'react-intersection-observer';

export const MainCont = styled.div`
  margin-top: 150px;
  margin-bottom: 500px;
  position: relative;
  @media (min-width: 800px) and (max-width: 1440px) {
    transform: scale(0.5);
    margin-left: 0px;
    margin-top: -450px;
    margin-bottom: -100px;
  }
  @media (min-width: 2560px) {
    transform: scale(1.4);
    margin-top: 551px;
    margin-bottom: 380px;
  }

  @media (max-width: 799px) {
    margin-left: -675px;
    margin-top: -52px;
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
      margin-top: 36.5px;
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

  .center-ref {
    height: 3000px;
    margin-top: -3200px;
    @media (max-width: 799px) {
      width: 100px;
      position: relative;
      margin-top: -500px;
      height: 5000px;
      margin-bottom: -20px;
      margin-left: -800px;
      z-index: 300;
    }
  }
`;


function Member() {
    const [animate, setAnimate] = useState(false);
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }, [inView]);
    
  return (
    <MainCont>
         <div className='pnvm'>
          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(500px)",
            }}
            className='parent-motion-div '
          >
            <div className='partnven-box'>
              <div className=''>
                <Card1 img={"/team/sanjeev.jpg"} txt={"Sanjeev"} />
              </div>
              <div className=''>
                <Card1 img={"/team/abhinav.jpg"} txt={"Abhinav"} />
              </div>
              <div className=''>
                <Card1 img={"/team/ogclub"} txt={"OG CLUB"} />
              </div>
              <div className=''>
                <Card1 img={"/team/xsquad"} txt={"XSQUAD"} />
              </div>
              <div className=''>
                <Card1 img={"/team/cfk"} txt={"CFK"} />
              </div>
              <div className='show-mobile'>
                <Card1
                  img={"/team/intoTheVerse"}
                  txt={"INTO THE VERSE"}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(-500px)",
            }}
            className=''
          >
            <div className='partnven-box second'>
              <div className=''>
                <Card1 img={"/team/code8"} txt={"CODE8"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/lunatic"}
                  txt={"LUNATIC GAMES"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/luster"} txt={"LUSTER"} />
              </div>
              <div className=''>
                <Card1 img={"/team/agg"} txt={"AGG"} />
              </div>
              <div className='hide-mobile'>
                <Card1
                  img={"/team/intoTheVerse"}
                  txt={"INTO THE VERSE"}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(500px)",
            }}
            className='parent-motion-div'
          >
            <div className='partnven-box second'>
              <div className=''>
                <Card1
                  img={"/team/web3punjab"}
                  txt={"WEB3 PANJAB COMMUNITY"}
                />
              </div>
              <div className=''>
                <Card1
                  img={"/team/asvarium"}
                  txt={"ASVARIUM"}
                />
              </div>
              <div className=''>
                <Card1
                  img={"/team/metaspacecy"}
                  txt={"METASPACECY"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/seracle"} txt={"SERACLE"} />
              </div>
              <div className='hide-mobile'>
                <Card1 img={"/team/asva"} txt={"ASVA LABS"} />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(-500px)",
            }}
            className=''
          >
            <div className='partnven-box second'>
              <div className='show-mobile'>
                <Card1 img={"/team/asva"} txt={"ASVA LABS"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/web3assam"}
                  txt={"web3 assam"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/sora"} txt={"SORA"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/borntodie"}
                  txt={"BORN TO DIE"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/gafin"} txt={"GAFIN"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/guildgames"}
                  txt={"guild games"}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(500px)",
            }}
            className='parent-motion-div'
          >
            <div className='partnven-box second'>
              <div className=''>
                <Card1
                  img={"/team/gamingarcade"}
                  txt={"GAMING ARCADE"}
                />
              </div>
              <div className=''>
                <Card1
                  img={"/team/kridafans"}
                  txt={"KRIDA FANS"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/medroii"} txt={"MEDROII"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/metadoge"}
                  txt={"METADOGE UNITY"}
                />
              </div>
              <div className='hide-mobile'>
                <Card1 img={"/team/nordek"} txt={"NORDEK"} />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            animate={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0px)" : "translateX(-500px)",
            }}
            className=''
          >
            <div className='partnven-box second'>
              <div className='show-mobile'>
                <Card1 img={"/team/nordek"} txt={"NORDEK"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/threewaystudio"}
                  txt={"THREEWAY STUDIO"}
                />
              </div>
              <div className=''>
                <Card1 img={"/team/truts"} txt={"TRUTS"} />
              </div>
              <div className=''>
                <Card1 img={"/team/xwinner"} txt={"X WINNER"} />
              </div>
              <div className=''>
                <Card1
                  img={"/team/yearn"}
                  txt={"YEARN TOGETEHR"}
                />
              </div>
              <div className=''>
                <Card1
                  img={"/team/zuraverse"}
                  txt={"ZURA VERSE"}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div ref={ref} className='  center-ref'></div>

    </MainCont>
  )
}

export default Member
