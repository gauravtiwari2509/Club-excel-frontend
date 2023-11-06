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

function Web() {
  return (
    <MainCont>
      <Image src={"/web.gif"} height={400} loading="lazy" width={600} alt='Domains' className='part1'/>
        <div className='part2'>
            <div className='domain-head'>Full Stack Development</div>
            <div className='domain-desc'>
            Our Full Stack Development domain is a comprehensive journey into the world of web development. You&apos;ll not only learn the fundamentals of front-end Frameworks like ReactJs, NextJs, Angular, etc but also delve deep into the intricacies of back-end development. Master server-side programming languages and databases to create dynamic and responsive web applications. Gain a holistic understanding of the entire web development process, from designing user interfaces to managing data and server infrastructure. By the end of this program, you&apos;ll have the skills to build and maintain robust, full-fledged web applications.
            </div>
        </div>
    </MainCont>
  )
}

export default Web
