import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
  let navigate = useNavigate()

  setTimeout(()=>{
    navigate("/dashboard")
  },4000)
   
  return (

    <div>
      About
    </div>
  )
}

export default About
