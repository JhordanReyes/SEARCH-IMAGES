import React, { useState } from 'react'
import "./style.css"

const Nav = () => {

  const [arrow, setArrow] = useState(false)
  const handleArrow = () => {
    setArrow(!arrow)
    const explore = document.getElementById("explore-flotante");
    arrow ? explore.style.display = "none"
      : explore.style.display = "block"
  }
  return (
    <nav className='nav'>
      <h2>JR</h2>
      <div className='nav__div'>
        <span onClick={handleArrow} className="nav__div-explore">Explore
          <i className={`bx ${arrow ? "bx-chevron-up" : "bx-chevron-down"}`} ></i>
          <div id='explore-flotante'>
            <ul>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/jhordanreyes/">
                  <i className='bx bxl-linkedin-square' id='linkedin'></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=reyesjhordan4@gmail.com">
                  <i className='bx bxl-gmail' id='gmail'></i>
                  <span>Gmail</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/reyesjhordan4/">
                  <i className='bx bxl-instagram' id='instagram'></i>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </span>
        <a href="https://github.com/JhordanReyes" target="_blank">
          <i className='bx bxl-github' title='sigueme'></i>
        </a>
      </div>
    </nav>
  )
}

export default Nav