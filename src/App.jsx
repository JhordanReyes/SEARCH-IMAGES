import React, { useEffect, useState } from 'react'
import { getImages } from './api/getImages'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Nav from './components/nav/Nav'

const App = () => {
  const [ search, setSearch] = useState("")
  const [ images, setImages ] = useState([])
  const [ mensaje, setMensaje ] = useState("")
  const [ tipo, setTipo ] = useState("photo")

  const traerImages = async() => {
    const data = await getImages(search, tipo);
    if(search !== ""){
      setMensaje(`${data.total} Imágenes gratis de ${search}`)
    }
    const dataImage = data.images.map(img => {
      return {
        id: img.id,
        url: img.largeImageURL,
        author: img.user,
        likes: img.likes,
        comments: img.comments,
      }
    });
    setImages(dataImage)
  }
  useEffect(() => {
    traerImages()
    }, [search, tipo]);
  
  return (
    <div>
      <Nav />
      <Header setSearch={setSearch} setTipo={setTipo} tipo={tipo}/>
      <Main 
        mensaje={mensaje}
        images={images}
      />
      <Footer />
    </div>
  )
}

export default App