import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='foot'>
      <footer>
        <div className="footer-content">
        <h3>GDSC Developer</h3>
         <ul className="socials">
           <li><a href="https://www.facebook.com/dscAKGEC/" target="blank"><i className="ri-facebook-fill"></i></a></li>
           <li><a href="https://twitter.com/dsc_akgec" target="blank"><i className="ri-twitter-fill"></i></a></li>
           <li><a href="https://github.com/dsc-akgec"  target="blank"><i className="ri-github-fill"></i></a></li>
           <li><a href="https://discord.com/invite/G2pC3EN34x"  target="blank"><i className="ri-discord-fill"></i></a></li>
           <li><a href="https://www.linkedin.com/in/dsc-akgec/"  target="blank"><i className="ri-linkedin-fill"></i></a></li>
         </ul>
    
        </div>

      </footer>
    </div>
  )
}

export default Footer
