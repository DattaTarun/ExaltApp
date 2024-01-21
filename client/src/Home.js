import React from 'react'
import Slider from './Slider'
import Feautured from './Feautured'
import Categories from './Categories'
import Contact from './Contact'
function Home() {
  return (
    <div>
      <Slider/>
      <Feautured type="featured" />
      <Categories/>
      <Feautured type="trending" />
      <Contact/>
    </div>
  )
}

export default Home
