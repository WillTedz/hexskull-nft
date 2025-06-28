
import React, { useState, useEffect } from 'react';
import CandyMachine from './CandyMachine';

const MintPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [mintStatus, setMintStatus] = useState('');
  const [nftPrice, setNftPrice] = useState(0.5); // Default price, will be updated from CandyMachine
  const [itemsRemaining, setItemsRemaining] = useState(0);

  // Check if wallet is connected
  const checkWalletConnection = async () => {
    try {
      const { solana } = window;
      if (solana?.isPhantom) {
        const response = await solana.connect({ onlyIfTrusted: true });
        setWalletAddress(response.publicKey.toString());
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
    }
  };

  // Connect wallet manually
  const connectWallet = async () => {
    try {
      const { solana } = window;
      if (solana) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Could not connect wallet:', error);
    }
  };

  // Update when CandyMachine state changes
  const onCandyMachineUpdate = (state) => {
    if (state) {
      setNftPrice(state.price);
      setItemsRemaining(state.itemsAvailable - state.itemsRedeemed);
    }
  };

  // Handle minting
  const handleMint = async () => {
    setIsMinting(true);
    setMintStatus('Minting in progress...');
    try {
      // Minting handled by CandyMachine component
      setMintStatus('Mint successful!');
    } catch (error) {
      console.error('Minting error:', error);
      setMintStatus('Mint failed. Please try again.');
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkWalletConnection();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Mint Your Exclusive NFT
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Join our collection with this unique NFT. Only one mint per wallet allowed.
        </p>
      </div>

      <div className="glass p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
        {!walletAddress ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Connect Your Wallet</h2>
            <p className="text-gray-300 mb-6">Please connect your Phantom wallet to mint</p>
            <button
              onClick={connectWallet}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Connect Wallet
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Ready to Mint</h2>
              <p className="text-gray-300 mt-2">Connected: {walletAddress.substring(0, 4)}...{walletAddress.substring(walletAddress.length - 4)}</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Price:</span>
                <span className="font-medium text-white">{nftPrice} SOL</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Remaining:</span>
                <span className="font-medium text-white">{itemsRemaining}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Limit:</span>
                <span className="font-medium text-white">1 per wallet</span>
              </div>
            </div>

            <CandyMachine  
              walletAddress={window.solana} 
              onUpdate={onCandyMachineUpdate}
              onMint={handleMint}
            />

            {mintStatus && (
              <p className={`mt-4 ${mintStatus.includes('failed') ? 'text-red-400' : 'text-green-400'}`}>
                {mintStatus}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>Make sure you have enough SOL in your wallet to cover the minting cost.</p>
        <p className="mt-1">Transaction fees may apply.</p>
      </div>
    </div>
  );
};

export default MintPage;






// const MintPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8">
//       <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
//         Mint Your NFT
//       </h1>
//       <div className="glass p-8 rounded-2xl shadow-xl">
//         <CandyMachine walletAddress={window.solana} />
//       </div>
//     </div>
//   );
// };

// export default MintPage;