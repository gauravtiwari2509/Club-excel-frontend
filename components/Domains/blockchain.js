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
function BlockChain() {
  return (
    <MainCont>
            <Image src={"/blockchain.gif"} loading="lazy" height={400} width={600} className='part1' alt='Domains'/>
            <div className='part2'>
            <div className='domain-head'>Blockchain Development</div>
            <div className='domain-desc'>The Blockchain Development domain offers a deep exploration of blockchain technology, which is revolutionizing various industries. You&apos;ll learn how blockchain works as a decentralized and tamper-resistant ledger system, enabling secure and transparent transactions. Understand the principles of blockchain consensus mechanisms, smart contracts, and cryptocurrency technologies like Bitcoin and Ethereum. Gain hands-on experience in developing and deploying blockchain applications that have the potential to disrupt finance, supply chain, healthcare, and more. With this knowledge, you&apos;ll be at the forefront of the blockchain revolution, contributing to innovative solutions and exploring new use cases.</div>
        </div>
    </MainCont>
  )
}

export default BlockChain
