'use client'

import React, { useState } from 'react'
import SplineRocket from './SplineRocket'
import LoadingSpinner from './LoadingSpinner'

function HeroSection() {
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

    const handleSplineLoad = () => {
      setIsSplineLoaded(true);
    };
  return (
    <div className="hero flex flex-col items-center justify-center md:flex-row md:justify-between md:rounded-xl py-1 md:pr-14 -mx-10 lg:mx-0">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="hero-text pt-5 md:pt-0 px-8 md:pl-14 md:pr-2 text-center md:text-left">
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white font-extrabold">Hey, I&apos;m {" "}
          {/* bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent */}
          <span className="name-animation">Preston</span>!
          </h1>

          <p className="mt-3 text-2xl text-gray-200">Developer and Designer. Check out some of my work!</p>
        </div>

        <div className="spline-rocket">
          {!isSplineLoaded && <div className='hero-loader'><LoadingSpinner /></div>}
          <SplineRocket sceneId="https://prod.spline.design/z9Q4u4Uuh8Z9TERe/scene.splinecode" onLoad={handleSplineLoad} className={isSplineLoaded ? "spline-fade-in loaded" : "spline-fade-in"} />
        </div>

      </div>
  )
}

export default HeroSection