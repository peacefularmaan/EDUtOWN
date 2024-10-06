import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import video_img from '../../assets/video-img3.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={video_img} alt="" className='video-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        {/* <img src={play_icon} alt="" className='play-icon'/> */}
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Welcome to our university, where academic excellence meets innovative research. We pride ourselves on fostering a vibrant community that encourages curiosity, creativity, and collaboration among students, faculty, and staff.</p>
        <p>Our diverse programs cater to a wide range of interests, providing students with the skills and knowledge needed to thrive in today’s dynamic world. We emphasize hands-on learning and critical thinking.</p>
        <p>With state-of-the-art facilities and a commitment to sustainability, our campus offers an inspiring environment for exploration and growth. Join us in shaping the future through education and meaningful experiences.</p>
      </div>
    </div>
  )
}

export default About
