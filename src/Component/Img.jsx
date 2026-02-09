import React from 'react'
import './Img.css'

export default function Img({ info }) {
  return (
    <>
      <img className='img' src={info.urls.full} alt="img" />
    </>
  )
}
