
import React from "react";
import profile from "../Images/profileimg.png"
export default function Followcomp(props) {
 

  return (
    <div className=" bg-[#202020] m-5 rounded-[10px] h-[5rem] flex items-center relative  ">
      <div  className="absolute left-[-1rem] top-[-1rem] w-[5rem] h-[5rem] border-[4vw] rounded-l-[0] rounded-r-[50%] border-[#000000]  bg-[#000000] flex items-center "><img className=" rounded-[100%]  " src={profile}></img></div>
    {/* <h1 className="text-[re]" >  {props.id}</h1>
    <h1> {props.RealName}</h1>
    <h1> {props.IngameName}</h1> */}
    <div className="w-[20%]"></div>
    <div className="w-[80%]">
<div className="text-[#ffffff] font-mochiy-pop text-[4vw] font-thin ml-[6vw] m-1">
              {props.IngameName}
            </div>
            <div className=" font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[6vw]">
              {props.RealName}
            </div>

            </div>
    </div>
  )
}