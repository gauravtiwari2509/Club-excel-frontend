import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const MainCont = styled.div`
display: flex;
align-items: center;
gap: 100px;
@media (min-width: 801px) and (max-width: 1200px) {
    transform: scale(0.6);
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
.part2{
    display: flex;
    align-items: center;
    flex-direction: column;
  
  
 
}
.domain-head{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 40px;
    background: -webkit-linear-gradient(#c0b7e8, #8176af);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
}
.domain-desc{
    margin-top: 20px;
    width: 500px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    color:white;
    line-height: 33px;
    text-align: center;
    @media (max-width: 800px) {
    height: 200px;
    font-size: 13px;
    width: 360px;
  }
}
.part1{
    border-radius: 12px;
    box-shadow: 2px 2px 10px black;
    @media (max-width: 800px) {
    height: 200px;
    width: 300px;
    margin-top: 30px;
  }
}
`



function Ml() {
  return (
    <MainCont>
            <Image src={"/ai.gif"} loading="lazy" height={400} width={600} className='part1' alt='Domains'/>
            <div className='part2'>
            <div className='domain-head'>AI/ML (Artificial Intelligence/Machine Learning)</div>
            <div className='domain-desc'>The AI/ML domain is your gateway to the exciting field of Artificial Intelligence and Machine Learning. Dive into the principles of machine learning, data analysis, and pattern recognition. Discover how AI systems can learn from data and make predictions, automating tasks and providing valuable insights. Develop AI-powered applications that can solve complex problems, optimize processes, and improve decision-making across various domains, including healthcare, finance, robotics, and natural language processing. With AI/ML expertise, you can tap into the transformative potential of artificial intelligence and shape the future of technology and innovation.</div>
        </div>
    </MainCont>
  )
}

export default Ml
