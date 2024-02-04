import React from 'react'
import './Contact.css'
import github from '../images/github.png'
import linkedin from '../images/LinkedIn_icon.png';
import arrow from '../images/Arrow 2.svg';
import discord from '../images/discord.png';
import instagram from '../images/instagram.png';


function Contact() {
 

  return (
    <>
      <div className='cta-wrapper' id='contact'>
        <div className='cta-head-div'>
          <h2 className='cta-head'>Let's <span><img src={arrow} alt='arrow'className='arrow'></img></span>
            Connect.</h2>

          <div className='bar cont'></div>
          <div className="social-links">
            <li><a  href={'https://github.com/Namrata52'} target='_blank'><img src={github} alt='github'></img></a></li>
            <li><a  href={'https://www.linkedin.com/in/namrata-l-b4760a207/'}  target='_blank'><img src={linkedin} alt='linkedin'></img></a></li>
            <li><img src={discord} alt='discord'></img></li>
            <li><img src={instagram} alt='instagram'></img></li>
          </div>

          
          <div className="msg">
            <h4>Drop me a message</h4>
            <p>Email: namratalilaria29@gmail.com</p>
            <p>Bunglow no-6, Avani Avenue, Mowa, Raipur, Chhattisgarh,492001</p>
          </div>
        </div>


        <form>
          <div className='form-div'>
            <div className='form-input'>
              <label for='Name'>Your Name</label>
              <input type='text' name='Name' className='field'></input>
            </div>
            <div className='form-input'>
              <label for='email'>Your email address</label>
              <input type='email' name='email' className='field'></input>
            </div>
            <div className='form-input'>
              <label for='project-details'>Tell about your project</label>
              <textarea rows={5} name='project-details' className='field'></textarea>
            </div>

            <button type='submit' className='submit-btn'>Submit</button>
          </div >

        </form >


      </div >
    </>
  )
}

export default Contact