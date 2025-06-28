
import  React from 'react';

const Header = () => {

  const [mobile, setMobile] = React.useState(false)

   const handleClick = () => {
    setMobile(mobile => !mobile);
  };

  return (
    <div className="fixed z-[100] flex w-full flex-col bg-gray-800/40 p-6 backdrop-blur-xl rgb">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <a href="/">
        <div className="relative  text-white flex h-10 w-52 items-center flex-reverse font-bold">
          <span className='flex text-white items-center gap-2'>
            
          <video
        src="/gif.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-8 w-8 inline object-cover"
      />

            HexSkull
          </span>
        </div>
      </a>
      <div className="ml-10 hidden xl:flex">
        <div className="space-x-8">
          <a
            className="text-gray-300 transition duration-300 hover:text-white link"
            href="/#gallery"
          >
            Gallery
          </a>

          <a
            className="text-gray-300 transition duration-300 hover:text-white link"
            href="/#roadmap"
          >
            Roadmap
          </a>
          <a
            className="text-gray-300 transition duration-300 hover:text-white link"
            href="/#faq"
          >
            FAQ
          </a>
          <a
  className="text-gray-300 transition duration-300 hover:text-white link"
  href="https://bronze.hexskull.net/"
>
  Mint Bronze
          </a>
          <a
  className="text-gray-300 transition duration-300 hover:text-white link"
  href="https://silver.hexskull.net/"
>
  Mint Silver
          </a>
          <a
  className="text-gray-300 transition duration-300 hover:text-white link"
  href="https://gold.hexskull.net/"
>
  Mint Gold
          </a>
          <a
  className="text-gray-300 transition duration-300 hover:text-white link"
  href="https://diamond.hexskull.net/"
>
  Mint Diamond
          </a>
        </div>
      </div>
    </div>
    <div className="hidden items-center space-x-4 md:inline-flex">
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
              <a
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                href="https://t.me/HexSkull_Neural"
              >
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                        <path fill="#0088CC" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                     </svg>             
              </a>
       <a href="https://solscan.io/account/5WB58unSR7UY7HDCjGkRh8VZynAEHH3yhaHCgESxZsf?cluster=mainnet">
        <div className="w-fit text-white rounded-2xl glass bg-size-200 bg-pos-0 px-4 py-2 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:bg-pos-100">
         View on Solscan
        </div>
      </a>
    </div>
    <div className="inline-flex md:hidden">
      <div onClick={handleClick } className="cursor-pointer rounded-full bg-indigo-500 p-2 shadow-lg shadow-white/10 transition-colors hover:bg-indigo-600">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          height={22}
          width={22}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </div>
    </div>
  </div>
  <div className={`${mobile ? '' : 'hidden'} md:hidden menu-drop`}>
  <div className="relative z-50 flex w-full flex-col space-y-4 bg-transparent px-6 pb-2 pt-8">
    <h4 className="mb-2 text-lg text-white">Useful Links:</h4>

    <a className="text-gray-300 transition duration-300 hover:text-white link" href="/#gallery">Gallery</a>
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="/#roadmap">Roadmap</a>
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="/#faq">FAQ</a>

    {/* Mint Links */}
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="https://bronze.hexskull.net/">Mint Bronze</a>
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="https://silver.hexskull.net/">Mint Silver</a>
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="https://gold.hexskull.net/">Mint Gold</a>
    <a className="text-gray-300 transition duration-300 hover:text-white link" href="https://diamond.hexskull.net/">Mint Diamond</a>

    {/* Social Icons */}
    <div className="flex items-center space-x-4 mt-4">
      <a className="flex items-center justify-center w-10 h-10 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500" href="https://x.com/HexSkull_Neural">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" fill="white" />
        </svg>
      </a>

      <a className="flex items-center justify-center w-10 h-10 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500" href="https://t.me/HexSkull_Neural">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
          <path fill="#0088CC" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
        </svg>
      </a>
    </div>

    {/* Solscan Button */}
    <a href="https://solscan.io/account/5WB58unSR7UY7HDCjGkRh8VZynAEHH3yhaHCgESxZsf?cluster=mainnet">
      <div className="w-fit text-white rounded-2xl glass bg-size-200 bg-pos-0 px-4 py-2 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:bg-pos-100">
        View on Solscan
      </div>
    </a>
  </div>
</div>


</div>

  )
}

export default Header
