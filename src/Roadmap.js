import React from 'react'

const Roadmap = () => {
  return (
    <section id="roadmap" className="container relative mx-auto p-16">
  <h3 className="mb-8 text-white text-center text-3xl font-semibold  decoration-indigo-500/80 lg:text-left xl:text-4xl">
    Roadmap
  </h3>
  <div className="relative flex flex-col">
    <div className="absolute left-[50%] z-40 h-full w-[2px] rounded-full bg-indigo-300/60 blur-sm lg:left-[44px]" />
    <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row pl-6">
      
      <div>
        <h3 className="mb-2 text-white text-center text-2xl font-semibold lg:text-left pl-8">
        ✅ Phase 1: Foundation & Launch
        </h3>
        <strong className='pl-12'>Status :</strong> Completed <br/>
        <br/>
       

        <ul className="list-disc list-inside text-center text-gray-300 lg:text-left pl-14">
           <li>Launch on <strong>pump.fun</strong> (fair-launch, no presale)</li>
          <li>Token renounced, dev wallet locked</li>
          <li>Community formation begins</li>
          <li>Website + Docs v1 released</li>
          <li>Initial branding + lore (HexSkull Universe)</li>
          </ul>
      </div>
    </div>
    <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row">
     
      <div>
        <h3 className="mb-2 text-white text-center text-2xl font-semibold lg:text-left pl-8">
        🚧 Phase 2: NFT Core Infrastructure
        </h3>
        <strong className='pl-12'>Status:</strong> In Progress (Q3 2025) <br/>
        <br/>

   <ul className="list-disc list-inside text-center text-gray-300 lg:text-left pl-14">
  <li>Build modular NFT minting system</li>
  <li>Launch HexSkull Genesis Collection (AI-ready NFT series)</li>
  <li>Smart contracts for logic layers & NFT modules</li>
  <li>NFT dashboard UI (connect wallets, view metadata & traits)</li>
  <li>Integrate Arweave/IPFS for permanent metadata</li>
  <li>Begin internal testing of on-chain logic</li>
</ul>
      </div>
    </div>
    <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row">
     
    <div>
    <h3 className="mb-2 text-white text-center text-2xl font-semibold lg:text-left pl-8">
  🔜 Phase 3: AI & Logic Layer
</h3>
        <strong className='pl-12'>Target:</strong> Q4 2025<br/>
        <br/>

   <ul className="list-disc list-inside text-center text-gray-300 lg:text-left pl-14">
   <li>Release plugin-based logic framework</li>
  <li>Add support for AI personality modules</li>
  <li>HuggingFace integration for NFT behavior training</li>
  <li>Launch NFT ↔ AI bridge layer</li>
  <li>First experimental use-case: “thinking NFT” (e.g. AI reaction logic)</li>
  <li>Beta of NFT Logic Marketplace (free & premium modules)</li>

</ul>
      </div>
    </div>
    <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row">
     
      <div>
      <h3 className="mb-2 text-white text-center text-2xl font-semibold lg:text-left pl-8">
  🧠 Phase 4: Ecosystem & Governance
</h3>
<strong className='pl-12'>Target:</strong>  Q1 2026<br/>
        <br/>
<ul className="list-disc list-inside text-center text-gray-300 lg:text-left pl-14">
  <li>Launch $HSK staking pool</li>
  <li>DAO voting platform (govern future logic upgrades)</li>
  <li>Integrate on-chain proposals & snapshot voting</li>
  <li>Expand SDK for third-party devs (build logic plugins)</li>
  <li>Strategic partnerships with artists, AI engineers & dApp builders</li>
  <li>Cross-chain NFT bridge (research phase)</li>
</ul>
      </div>
    </div>
    <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row">
     
      <div>
        <h3 className="mb-2 text-white text-center text-2xl font-semibold lg:text-left pl-8">
        🌐 Phase 5: Scale & Beyond
        </h3>
        <strong className='pl-12'>Target:</strong>  Q1 2026<br/>
        <br/>
        <ul className="list-disc list-inside text-center text-gray-300 lg:text-left pl-14">
  <li><strong>Target:</strong> Mid to Late 2026+</li>
  <li>Deploy mobile dashboard app (wallet + NFT logic control)</li>
  <li>NFT → SBT (soulbound logic) conversion system</li>
  <li>Support for educational AI logic (NFTs that teach/interact)</li>
  <li>Token-gated community tools (forums, AI access, dev sandbox)</li>
  <li>CEX listing exploration</li>
  <li>Launch community-built AI logic competitions</li>
</ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default Roadmap
