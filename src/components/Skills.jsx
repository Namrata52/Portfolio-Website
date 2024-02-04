import React from 'react'
import imageList from '../imageList'
import './Skills.css'

function Skills() {

  return (
    <div className='skills' id="skill">
      <h1 className='skill-h1'>SKILLS</h1>
      <h2 className='skill-h2'>
        TECH STACK<span> <div className='bar'></div></span>
      </h2>
      <div className='skill-img'>
        {/* {console.log(imageList)} */}
        {imageList.map((image) => {
          // {console.log(image.src)}
          return <img className='img' key={image.id} src={image.src} alt={image.alt}></img>
        })}


      </div>

    </div>

  )
}

export default Skills



