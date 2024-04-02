import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const sContext = createContext();

export default function Signcontext(props) {
  const host = "localhost:5000";

  let navigate = useNavigate();

  

  //  const getinfo= async ()=>{

  //   const response = await fetch("http://localhost:5000/getinfo", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMmM5YTU3MGE0YTA1NGZmODI1ZWQzIn0sImlhdCI6MTcxMTQ1ODcyNX0.fTVwowRgkobizEMqqrKyC689psJMg-aqZgQt26UIZGI"
  //     },

  //   });
  //   const data = await response.json()
  //   console.log(data)
  //   setinfostate(data)
  // }

  const signin = async (email, password, confirmpassword) => {
    const response = await fetch("http://localhost:5000/signin ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, confirmpassword }),
    })
      .then(async (response) => {
        const st = await response.text();
        if (response.ok) {
          toast.success("Signed up Successful");
          localStorage.setItem("token", st);
          navigate("/aftersignupform")
        } else {
          toast.error(st);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
        console.log(err);
      });

  
  };


  const login = async (email, password) => {

    const response = await fetch("http://localhost:5000/login ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then( async (response) => {
        const st = await response.text();
        if (response.ok) {
          toast.success("Login Successful");
          localStorage.setItem("token", st);
          navigate("/")
        } else {
          toast.error(st);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
        console.log(err);
      });

  
  };



  return (
    <sContext.Provider value={{  signin,login }}>
      {props.children}
    </sContext.Provider>
  );
}
