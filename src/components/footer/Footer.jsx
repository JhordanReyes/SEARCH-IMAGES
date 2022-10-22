import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__info'>
            <h2>pixabay</h2>
            <p>Nuestro banco de imágenes tiene más de 2.9 millón de imágenes y videos compartidos por nuestra talentosa comunidad.</p>
            <div>
                <a title='contáctame' target="_blank" href="https://www.linkedin.com/in/jhordanreyes/">
                    <i class='bx bxl-linkedin-square' ></i>
                </a>
                <a title='escríbeme' target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=reyesjhordan4@gmail.com">
                    <i class='bx bxl-gmail' ></i>
                </a>
                <a title='sígueme' href="https://github.com/JhordanReyes" target="_blank">
                    <i class='bx bxl-github'></i>
                </a>
                <a title='sígueme' target="_blank" href="https://www.instagram.com/reyesjhordan4/">
                    <i class='bx bxl-instagram' ></i>
                </a>
            </div>
        </div>
        <div className='footer__links'>
            <ul>
                <li>Discover</li>
                <li>Editors Choice</li>
                <li>Colecciones seleccionadas</li>
                <li>Imágenes populares</li>
                <li>Vídeos populares</li>
                <li>Música más escuchada</li>
                <li>Búsquedas populares</li>
            </ul>
            <ul>
                <li>Comunidad</li>
                <li>Blog</li>
                <li>Foro</li>
                <li>Creators</li>
                <li>Cámaras</li>
            </ul>
            <ul>
                <li>Conócenos</li>
                <li>Acerca de nosotros</li>
                <li>Preguntas frecuentes</li>
                <li>Licencia</li>
                <li>Condicines de Uso</li>
                <li>Política de privacidad</li>
                <li>Cookies Pollicy</li>
                <li>API</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer