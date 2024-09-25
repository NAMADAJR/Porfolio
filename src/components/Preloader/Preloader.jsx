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
            <span>Developer,</span>
            <span> Designer</span>
        </div>
    </div>
  )
}

export default Preloader