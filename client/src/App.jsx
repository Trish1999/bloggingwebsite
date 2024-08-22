import { useState } from 'react'
import styles from'./App.module.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Footer/>
    </>
  )
}

export default App
