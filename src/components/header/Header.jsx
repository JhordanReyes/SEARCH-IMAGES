import React, { useState } from 'react'
import "./style.css"

const Header = ({ setSearch, setTipo, tipo }) => {

    const [ arrow, setArrow] = useState(false)
    const [ dataSearch, setDataSearch] = useState("")

    const handleArrow = () => {
        setArrow(!arrow)
        const optionsFlotante = document.getElementById("options-flotante");
        arrow ? optionsFlotante.style.display = "none" : optionsFlotante.style.display = "block"
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(dataSearch)
    }
    const colorSearch = (e) => {
        if((e.target.value).length > 0){
            document.getElementById("search").style.color = "rgb(50, 168, 40)"
        } else {
            document.getElementById("search").style.color = "black"
        }
        setDataSearch(e.target.value);
    }

    return (
        <header className='header'>
            <div className='header__container'>
                <h1>Increíbles Imágenes Gratis Para Descargar</h1>
                <p>Nuestro banco de imágenes tiene más de 1 millón de imágenes y videos compartidos por nuestra talentosa comunidad.</p>
                <div className='header__container-search'>
                    <form onSubmit={e => handleSearch(e)}>                      
                        <i
                            className='bx bx-search-alt-2' id='search'
                            onClick={handleSearch}></i>
                        <input
                            type="text"
                            placeholder='Buscar imágenes'
                            value={dataSearch}
                            onChange={(e)=> colorSearch(e)}
                        />
                    </form>
                    <span onClick={ handleArrow } className="options">
                        <span>{tipo === "photo" ? "Imágenes"
                            : tipo === "illustration" ? "Ilustración"
                            : tipo === "all" ? "Todos"
                            : "Vector"}</span>
                        <i
                            className={`bx ${arrow ? "bx-chevron-up" : "bx-chevron-down"}`}
                        />
                        <div id='options-flotante'>
                            <ul>
                                <li onClick={ ()=> setTipo("all") }>
                                    <i className='bx bx-palette'></i><span>Todos</span>
                                </li>
                                <li onClick={ ()=> setTipo("photo") }>
                                    <i className='bx bx-image'></i><span>Imágenes</span>
                                </li>
                                <li onClick={ ()=> setTipo("illustration") }>
                                    <i className='bx bx-brush'></i><span>Ilustración</span>
                                </li>
                                <li onClick={ ()=> setTipo("vector") }>
                                    <i className='bx bx-paint-roll'></i><span>Vector</span>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header