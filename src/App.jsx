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

  const traerImages = async() => {
    const data = await getImages(search);
    if(search !== ""){
      setMensaje(`${data.total} Imágenes gratis de ${search}`)
    }
    const dataImage = data.images.map(img => {
      return {
        id: img.id,
        url: img.largeImageURL,
        author: img.user,
        likes: img.likes,
      }
    });
    setImages(dataImage)
  }
  useEffect(() => {
    traerImages()
    }, [search]);
  
  return (
    <div>
      <Nav />
      <Header setSearch={setSearch}/>
      <Main mensaje={mensaje} search={search} images={images}/>
      <Footer />
    </div>
  )
}

export default App