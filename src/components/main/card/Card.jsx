import React from 'react'
import "./style.css"

const Card = ({ url, likes, comments }) => {
  return (
    <div className='card'>
        <div className='card__container'>
          <p><i className='bx bx-message-rounded-dots'></i> {comments}</p>
          <p><i className='bx bx-heart'></i> {likes}</p>
        </div>
        <img src={url} alt="" />
    </div>
  )
}

export default Card