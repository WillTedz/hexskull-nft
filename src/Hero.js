import React from 'react'
import MintButton from './MintButton';
import Count from './Count';


const Hero = () => {


  return (
    <>
    <div className="relative z-20 mx-auto grid grid-cols-1 gap-x-4 gap-y-20 py-48 lg:grid-cols-2 bg">
  <div className="container px-12 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
    <h1 className="mb-4 text-white text-2xl font-bold xl:text-0xl ">HexSkull Neural is a cyberpunk-inspired NFT protocol that powers intelligent ownership, modular art logic, and decentralized tech identities through $HSK </h1>
    <br></br>
    <h2 className="mb-12 text-4xl font-bold text-teal-400 underline decoration-indigo-400/30 xl:text-5xl">
     A NFT Project
    </h2>
    <p className="text-md mb-10 font-medium text-gray-300 xl:text-lg">
      Meet a collection of 100+ amazing figures with different attributes and
      styles!
    </p>
    <div className="flex flex-col items-center space-x-4 space-y-4 sm:flex-row sm:space-y-0">

      <h1 className="font-bold text-3xl md:text-2xl ">Join X.com</h1>
    <a
  className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
  href="https://x.com/HexSkull_Neural"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="36"
    height="36"
  >
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
      d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
      fill="rgba(236,240,241,1)"
    />
  </svg>
             </a>
    </div>
     <Count/>
  </div>

  <div className="ml-10 flex justify-center">
    <div className="relative -skew-y-3 mt-24 z-10 skew-x-6">
      <div className="h-[15rem] w-[11rem] rounded-2xl transition-all duration-300 cursor-pointer bg-gray-900 shadow-xl shadow-indigo-500/30 xl:h-[23rem] xl:w-[18rem] hover:scale-90">
        <div className="relative h-[11rem] w-full xl:h-[18rem]">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }}
          >
            <img
              alt="Top Card"
              src="/images/12.png"
              decoding="async"
              data-nimg="fill"
              className="heroCard"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </div>
        <div className="flex h-[4rem] w-full items-center justify-between px-4 xl:h-[5rem]">
          <div className="flex items-center space-x-3">
            <div className="relative h-6 w-6 xl:h-8 xl:w-8">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0
                }}
              >
                <img
                  alt="My Profile 1"
                  src='/images/13.png'                 
                  decoding="async"
                  data-nimg="fill"
                  className="heroUser"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                  }}
                />
               </span>
            </div>
            <div>
              <p className="text-xs text-gray-300 xl:text-sm">#5758</p>
              <p className="text-md font-medium text-indigo-300 xl:text-xl">
                1 SOL
              </p>
            </div>
          </div>
          <span>
            🌟
          </span>
        </div>
      </div>
    </div>
    <div className="relative skew-y-3 -translate-x-20 animate-pulse -skew-x-6">
      <div className="h-[15rem] w-[11rem] rounded-2xl transition-all duration-300 cursor-pointer bg-gray-900 shadow-xl shadow-indigo-500/30 xl:h-[23rem] xl:w-[18rem] hover:scale-90">
        <div className="relative h-[11rem] w-full xl:h-[18rem] hover:rotate[20px] hover:scale-3">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }}
          >
            <img
              alt="Back Card"
              src="/images/13.png"
              decoding="async"
              data-nimg="fill"
              className="heroCard"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />

          </span>
        </div>
        <div className="flex h-[4rem] w-full items-center justify-between px-4 xl:h-[5rem]">
          <div className="flex items-center space-x-3">
            <div className="relative h-6 w-6 xl:h-8 xl:w-8">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0
                }}
              >
                <img
                  alt="My Profile 2"
                  src="/images/13.png"
                  decoding="async"
                  data-nimg="fill"
                  className="heroUser"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                  }}
                 
                />

              </span>
            </div>
            <div>
              <p className="text-xs text-gray-300 xl:text-sm">#3567</p>
              <p className="text-md font-medium text-indigo-300 xl:text-xl">
                0.1 SOL
              </p>
            </div>
          </div>
          <span>
            🌟
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
 
  </>
  )
}

export default Hero
