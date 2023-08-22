import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Input from './input';



const MainCont = styled.div`
@media (max-width:800px) {
    transform: scale(0.8);
}
.regd-txt{
    margin-top: 50px;
    color: #242731;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px;

}

.nxt-btn{
    width: 180px;
    display: flex;
height: 48px;
padding: 0px 24px 0px 32px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 4px;
border: 1px solid #BBBFC1;
background: #FFF;
color: #242731;
text-align: center;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
text-transform: capitalize;
}

.hover:hover{
    transform: scale(1.06);
    transition: 500ms;
}
.pointer{
    cursor: pointer;
}
.line{
    width: 80px;
height: 1px;

}
.status{
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    
}

.active{
  background: #007AFF;
}
.inactive{
    background: #B9B9C3;
}

.regd-msg{
    margin-top: 16px;
    margin-bottom: 32px;
    color: #575F6E;
font-family: 'jura';
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 22px;
}


.main-form{
    margin-bottom: 32px;
   border: 1px solid rgba(87, 95, 110, 0.7);
   padding-top: 12px;
   padding-bottom: 32px;
   display: flex;
   align-items: center;
   flex-direction: column;
   transition: width 2s;
}
.labelc{
    color: #242426;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;

}
.save-btn{
    width: 180px;
    display: flex;
height: 48px;
padding: 0px 32px 0px 24px;
justify-content: center;
align-items: center;
gap: 8px;
color: #FFF;
text-align: center;
font-family: 'Poppins';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
border-radius: 4px;
background: #007AFF;
text-transform: capitalize;
}
.checkbox-div{
    margin-top: 32px;
    display: flex;
    align-items: center;
}
.checkbox{
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    
height: 23px;
border: 2px solid #575F6E ;
flex-shrink: 0;
border-radius: 4px;
}
.checked{
    height: 24px;
    width: 24px;
    margin-left: -2px;
    background: url("/check.svg");
    background-size: 24px 24px;
}
.dummy{
    width: 392px;
    @media (max-width:800px) {
        width:350px;
}
}

`


function Form() {
    const [state,setState] = useState(0);
    const [check,setCheck] = useState(false);
    const emptyObj = {
        name:"",
        email:"",
        contact:"",
        roll:"",
        degree:"",
        batch:"",
        area:""
    };
    const [details,setDetails] = useState(emptyObj)



    function change(e){
        const{name,value} = e.target;
        setDetails({...details, [name]:value})
       
    }
    async function save(){
        console.log(details);
        setDetails(emptyObj)
        setState(0);
        
    }


  return (
    <MainCont>
    <div className='form'>
      <div className='status'>
      <Image src={'/filled.svg'} height={17} width={17} alt='' className=''/>
      <div className={state>=1?'line active':'line inactive'}></div>
      <Image src={state>=1?'/filled.svg':'/holo.svg'} height={17} width={17} alt='' className=''/>
      <div className={state>=2?'line active':'line inactive'}></div>
      <Image src={state>=2?'/filled.svg':'/holo.svg'} height={17} width={17} alt='' className=''/>
      </div>
      <div className='regd-txt'>Registration</div>
      <div className='regd-msg'>
      Fill in the registration data. It will take a couple of minutes. 
      </div>


        <div className='main-form'>
       

           { state==0?<div className='state1'>
                <Input label={"Full Name"} change={change} name={"name"} details={details}/>
                <Input label={"Email"} change={change} name={"email"} details={details}/>
                <Input label={"Contact No."} change={change} name={"contact"} details={details}/>
            </div>:


            state==1?<div className='state2'>
                <Input label={"Roll No."} change={change} name={"roll"} details={details}/>
                <Input label={"Degree"} change={change} name={"degree"} details={details}/>
                <Input label={"Batch"} change={change} name={"batch"} details={details}/>
            </div>:
            <div className='state3'>
                <div className='checkbox-div'>
                <div className='labelc'>Are you localite?</div>
                <div className='checkbox' onClick={()=>setCheck(!check)}>{check?<div className='checked' ></div>:""}</div>
                </div>
                {check?<Input label={"Enter the area you belong to"} change={change} name={"area"} details={details}/>:<div className='dummy'></div> }
            </div>
}


        </div>
      {state<2?<div className='nxt-btn hover pointer' onClick={()=>setState(state+1)}>Go next <Image src={'/Icon.svg'} height={24} width={24} alt='' className=''/></div>

    :<div className='save-btn hover pointer' onClick={()=>save()}> <Image src={'/tick.svg'} height={24} width={24} alt='' className='' /> Save</div>}

    </div>
    </MainCont>
  )
}

export default Form
