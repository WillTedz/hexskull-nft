import React from 'react'
const Footer = () => {
  return (
    <footer className="footer-section relative footer-shape p-16 text-gray-400">
      <div className="container mx-auto relative px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
          <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
            <a
              className="font-coiny mb-8 text-xl md:text-3xl font-bold"
              href="/#"
            >
              
              HexSkull
            </a>
            <div className="social-share flex items-center">
              
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
            </div>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Navigation
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://hexskull-organization.gitbook.io/hexskull/"
                >
                  Explore
                </a>
              </li>
             

              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://hexskull-organization.gitbook.io/hexskull/minimal/contributors"
                >
                  Terms{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Explore
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
             
             
              
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://hexskull-organization.gitbook.io/hexskull/minimal/contact-community"
                >
                  Community
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://hexskull-organization.gitbook.io/hexskull"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Community
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <a href=' https://hexskull-organization.gitbook.io/hexskull/minimal/the-plan-concept-summary' className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover">Mint Page</a>
               
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href=" https://hexskull-organization.gitbook.io/hexskull/minimal/the-plan-concept-summary"
                >
                  How to Mint
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://hexskull-organization.gitbook.io/hexskull/minimal/modular-nft-architecture"
                >
                  Activity
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="https://x.com/WillTedz"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget col-span-1 md:col-span-2">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Subscribe Us
            </h4>
            <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
              <input
                className="bg-transparent border-2 border-r-0 border-blue-500 transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                type="text"
                placeholder="Your e-mail address"
              />
              <button
                className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500 bg-gradient-to-tl from-blue-500 via-purple-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z" fill="rgba(236,240,241,1)"/></svg>
              </button>
            </form>
            <p className="font-body text-sm text-blueGray-600">
              Your privacy protected! We dont disclose Email.
            </p>
          </div>
        </div>
        <div className="lg:text-center mt-8 lg:mt-14">
          <p className="font-body text-sm text-blueGray-600">
            © <span id="spanYear">2025</span> HexSkull - All Rights Reserved by{'Hexskull'}
          
          </p>
        </div>
      </div>
      <a
        href="#top"
        className="footer-back w-10 h-10 hidden fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center show"
      >
        <svg
          width={18}
          height={10}
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L9 1L17 9"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
