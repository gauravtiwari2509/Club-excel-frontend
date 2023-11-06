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


function MobileDev() {
  return (
    <MainCont>
            <Image src={"/mobile.gif"} loading="lazy" height={400} width={600} className='part1' alt='Domains'/>
            <div className='part2'>
            <div className='domain-head'>Mobile Application Development</div>
            <div className='domain-desc'>Mobile Application Development is an exciting domain that opens the doors to the ever-evolving world of mobile technology. In this domain, you will acquire the knowledge and skills necessary to design, develop, and deploy mobile applications for both iOS and Android platforms. Learn about user experience (UX) and user interface (UI) design to create engaging and intuitive mobile apps. Dive into mobile app frameworks and development tools to build efficient and responsive applications that can be distributed to a global audience through app stores. Whether you&apos;re passionate about gaming, productivity apps, or any other niche, this domain will empower you to turn your mobile app ideas into reality.</div>
        </div>
    </MainCont>
  )
}

export default MobileDev
