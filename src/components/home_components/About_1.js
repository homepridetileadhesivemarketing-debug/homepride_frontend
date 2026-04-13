import React from 'react'
import About_1_1 from './About_1_1'
import About_1_2 from './About_1_2'

function About_1() {
  return (
   <>
   <div className='container'>
    <div className='row'>
      <div className='col-md-4 col-sm-12'>
       <About_1_1></About_1_1>
      </div>
      <div className='col-md-8 col-sm-12'>
        <About_1_2></About_1_2>
      </div>
    </div>
   </div>
   </>
  )
}

export default About_1
