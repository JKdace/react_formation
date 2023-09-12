import React, { useState, useEffect } from 'react'
import FlexH3G from "./components/layout/FlexH3G/FlexH3G"
import FlexW1G from "./components/layout/FlexW1G/FlexW1G"
import Header from "./components/ui/Header/Header"
import Footer from "./components/ui/Footer/Footer"
import Navbar from "./components/ui/Navbar/Navbar"
import MemeForm from "./components/MemeForm/MemeForm"
import MemeViewer from "./components/ui/MemeViewer/MemeViewer"
import { DummyMeme } from './interfaces/common'

const App = () => {
  const [current, setCurrent] = useState(DummyMeme)
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('http://localhost:7956/images')
    .then(response => response.json())
    .then(a => setImages(a) )
  }, [])
  
  return (
    <div className='App'>
      <FlexH3G>
        <Header></Header>
        <Navbar></Navbar>
        <FlexW1G>
          <MemeViewer meme={current} image={images.find((img) => img.id === current.imageId)} basePath=""></MemeViewer>
          <MemeForm meme={current} images={images} onMemeChange={(newMeme) => {
              setCurrent(newMeme);
            }}></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>
  )
}

export default App