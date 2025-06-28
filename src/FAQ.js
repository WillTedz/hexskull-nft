import React from 'react'

const FAQ = () => {
  return (
    <section id="faq" className="container relative mx-auto p-16">
  <h3 className="mb-14 text-center text-white text-3xl font-semibold  decoration-indigo-500/80 lg:text-left xl:text-4xl">
    Frequently Asked Questions
  </h3>
  <div className="my-6">
    <div className="rounded-t-2xl bg-teal-600/80 flex w-full cursor-pointer select-none items-center justify-between border-2 border-teal-600/30 px-4 py-4 text-gray-300 transition duration-300 hover:border-teal-600/80 hover:text-white">
      <h4 className="text-lg font-medium">What is HexSkull Neural?</h4>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height={22}
        width={22}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 px-4 py-4 text-gray-300">
      <h5>
      HexSkull Neural is a cyberpunk-inspired NFT protocol launched via pump.fun, designed to enable intelligent ownership, modular logic, and decentralized identities through the $HSK token
      </h5>
    </div>
  </div>
  <div className="my-6">
    <div className="rounded-t-2xl bg-teal-600/80 flex w-full cursor-pointer select-none items-center justify-between border-2 border-teal-600/30 px-4 py-4 text-gray-300 transition duration-300 hover:border-teal-600/80 hover:text-white">
      <h4 className="text-lg font-medium">How much do they Cost?</h4>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height={22}
        width={22}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 px-4 py-4 text-gray-300">
      <h5>
        The cost of NFTs varies depending on their tier. Bronze NFTs are priced at 0.1 SOL , Silver NFTs at 0.2 SOL, Gold NFTs at 0.5 SOL and Diamoind NFTs at 1 SOL.
      </h5>
    </div>
  </div>
  <div className="my-6">
    <div className="rounded-t-2xl bg-teal-600/80 flex w-full cursor-pointer select-none items-center justify-between border-2 border-teal-600/30 px-4 py-4 text-gray-300 transition duration-300 hover:border-teal-600/80 hover:text-white">
      <h4 className="text-lg font-medium">Can I buy an NFT from this site?</h4>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height={22}
        width={22}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 px-4 py-4 text-gray-300">
      <h5>
      NFT system with 4 tiers (Bronze → Diamond), mintable by holding tokens, rewards increase and early users benefit most.
      </h5>
    </div>
  </div>
</section>

  )
}

export default FAQ
