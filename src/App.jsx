import React, { useEffect, useState } from 'react'
import { getImages } from './api/getImages'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Modal from './components/modal/Modal'
import Nav from './components/nav/Nav'

const App = () => {
  const [ search, setSearch] = useState("")
  const [ images, setImages ] = useState([])
  const [ image, setImage] = useState({})
  const [ mensaje, setMensaje ] = useState("")
  const [ tipo, setTipo ] = useState("photo")
  const [ modal, setModal ] = useState(false)

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
        authorImage: img.userImageURL,
        likes: img.likes,
        comments: img.comments,
        tags: img.tags,
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
        setImage={setImage}
        setModal={setModal}
        modal={modal}
      />
      <Modal
        image={image}
        setModal={setModal}
        modal={modal}
      />
      <Footer />
    </div>
  )
}

export default App