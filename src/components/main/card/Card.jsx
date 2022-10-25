import React from 'react'
import "./style.css"

const Card = ({ url, likes, comments, handleModal, setImage, img }) => {

    const handleClick = () => {
        handleModal();
        setImage(img);
    }

  return (
    <div
      className='card'
      onClick={handleClick}>
      <div className='card__container'>
        <p><i className='bx bx-message-rounded-dots'></i> {comments}</p>
        <p><i className='bx bx-heart'></i> {likes}</p>
      </div>
      <img src={url} alt="" />
    </div>
  )
}

export default Card