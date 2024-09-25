import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '.'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])

  return (
    <div className="preloader">
        <div className="text-container">
            <h1>Welcome</h1>
        </div>
    </div>
  )
}

export default Preloader