import React, { useState } from 'react'
import "./style.css"

const Header = ({ setSearch }) => {

    const [ arrow, setArrow] = useState(false)
    const [ dataSearch, setDataSearch] = useState("")

    const handleArrow = () => {
        setArrow(!arrow)
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
                        <i className='bx bx-search-alt-2' id='search'></i>
                        <input
                            type="text"
                            placeholder='Buscar imágenes'
                            value={dataSearch}
                            onChange={(e)=> colorSearch(e)}
                        />
                    </form>
                    <p onClick={ handleArrow }>
                        <span>Imágenes</span>
                        <i className={`bx ${arrow ? "bx-chevron-up" : "bx-chevron-down"}`} ></i>
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header