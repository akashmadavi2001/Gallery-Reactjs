import { useState } from 'react'
import './Img.css'

export default function Img({ info }) {

  const [btn, setBtn] = useState(true);

  return (
    <>
      {btn ? "" : <div className='imgS' onClick={() => setBtn(!btn)}><img src={info.urls.small} alt="img" /></div>}
      <img className='img' onClick={() => setBtn(!btn)} src={info.urls.full} alt="img" />
    </>
  )
}
