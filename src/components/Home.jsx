import React from 'react'
import Header from './Header'
import Preloader from './Preloader/Preloader'

const Home = () => {
  return (

    <div>
      <Preloader />
      <Header />
      <h1>Home Page</h1>
      </div>
  )
}

export default Home