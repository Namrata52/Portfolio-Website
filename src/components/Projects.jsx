import React from 'react'
import ProjectData from '../ProjectData'

import './Projects.css'
import HireMeBtn from './HireMeBtn';
import Card2 from './Card2';

function Projects() {
  return (
    <div id='projects'>
      <div className='wrapper-card'>
        <h2 className='work'>WORK</h2>
        <h1 className='project-head'>PROJECTS<span> <div className='bar'></div></span></h1>

        <div className='project-cards'>
          {ProjectData.map((pro) => {
            //  return <Card key={pro.id} {...pro}></Card>
            return <Card2 key={pro.id} {...pro}></Card2>
          })}
        </div>


        {/* <button className='view-all-btn'>ALL PROJECTS</button> */}
      </div>
    </div>
  )
}

export default Projects