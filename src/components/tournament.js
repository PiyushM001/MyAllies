import React from 'react'
import profile from '../Images/profile.svg';

export default function Tournament(props) {
  return (
    <div className='w-[90%]  bg-[#222222] m-2 rounded-[10px] '>





      <div className= '  bg-[#0c0c0c] h-[4rem] rounded-t-[10px] flex  '>


        <div className='w-[22%] h-[4rem] flex justify-center items-center '><img className='w-[70%] h-[70%] border-[1px] border-[#222222] rounded-[8px] ' src={props.orgimg}></img></div>
        <div className='w-[50%] flex flex-col justify-center border-b-[2px] border-[#222222] '>
          <div className='text-[#ffffff] font-mochiy-pop text-[3.3vw] font-thin h-[30%]'>{props.org}</div>
          <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#656565]'>{props.description}</div>
          </div>
        <div className='w-[30%] flex justify-center items-center '> 
        <div className='flex justify-center items-center text-[#000000] bg-[#B4FF16]  w-[70%] h-[40%] font-mochiy-pop rounded-[10px] text-[3.3vw]'>{props.entryfee}</div>
        </div>

      </div>








      <div className='bg-[#0c0c0c] h-[3rem] flex'>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>Prizepool-{props.prizepool}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>{props.registrations} Registered</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw] '>{props.timeleft}</div>


      </div>
      
<div className='w-full h-[2.5rem] flex items-center '>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#B4FF16] text-[3.5vw] '>{props.game}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '>{props.solo}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '>{props.map}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '>{props.info}</div>

</div>
    
    </div>
  )
}
