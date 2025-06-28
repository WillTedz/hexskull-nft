import React, {useEffect, useState} from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { Program, web3 } from '@project-serum/anchor';
import { MintLayout, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { sendTransactions } from './connection';
import './CandyMachine.css';
import { useLocalStorage } from './../useLocalStorage';
import { AnchorProvider } from "@project-serum/anchor";
import Idl from '../idl/candy_machine.json';
//import { Token } from '@solana/spl-token';
//import { useWallet } from "@solana/wallet-adapter-react";



import {
  candyMachineProgram,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  getAtaForMint,
  getNetworkExpire,
  getNetworkToken,
  CIVIC
} from './helpers';



const { SystemProgram } = web3;
const opts = {
  preflightCommitment: 'processed',
};
const COLLECTION_MINT = new PublicKey('GvGoWGH7KDbpE3jueezVeXTvAeXf9Yixw5uiuUfYQdut');

const CandyMachine = ({ walletAddress }) => {

  const [candyMachine, setCandyMachine] = useState(null)
  const [minted, setMinted] = useLocalStorage("minted", "");
const [maxitems, setMaxitems] = useLocalStorage("maxitems", "");
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);



useEffect(() => {
  if (walletAddress) {
    getCandyMachineState();
  }
}, [walletAddress]);

  // const getCandyMachineState = async() => {
  //         setIsLoading(true);
  //         setError(null);

          
  //     try {
  //       const provider = getProvider();
  //   if (!provider) {
  //     console.error("Provider is not initialized.");
  //     setError("Solana provider is not available.");
  //     setIsLoading(false);
  //     return;
  //   }
  //     // const idl = await Program.fetchIdl(candyMachineProgram, provider)
  //     // const program = new Program(Idl, candyMachineProgram, provider)
  //     // const candyMachine = await program.account.candyMachine.fetch(
  //     //   'CRq2SEvfaC6dHXCRryooPb2noQuBAf77JRgfVFWX8A5C' // Replace with your Candy Machine ID
  //     // )
  //    // const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID;
  //   // const candyMachineId=  new PublicKey("CRq2SEvfaC6dHXCRryooPb2noQuBAf77JRgfVFWX8A5C"); // Replace with your Candy Machine ID
  //   // if (!candyMachineId) {
  //   //   console.error("REACT_APP_CANDY_MACHINE_ID not set in .env file.");
  //   //   setError("Candy Machine ID is missing in environment.");
  //   //   setIsLoading(false);
  //   //   return;
  //   // }

  //   // const connection = provider.connection;
  //   // const accountInfo = await connection.getAccountInfo(candyMachineId);
    
  //   // if (!accountInfo) {
  //   //   throw new Error("Candy Machine account not found");
  //   // }

  //   // // Manual decoding as fallback
  //   // const candyMachineAccount = program.coder.accounts.decode(
  //   //   'candyMachine',
  //   //   accountInfo.data
  //   // );
  //   // const candyMachine = await program.account.candyMachine.fetch(candyMachineId).catch(err => {
  //   //   console.error("Failed to fetch candy machine account:", err);
  //   //   throw new Error("Invalid Candy Machine ID or program mismatch");
  //   // });;
  //   // const candyMachineAccount = await program.account.candyMachine.fetch(candyMachineId)
  //   // .catch(err => {
  //   //   console.error("Failed to fetch candy machine account:", err);
  //   //   throw new Error("Invalid Candy Machine ID or program mismatch");
  //   // });
  //   const programId = new PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ");
  //   const program = new Program(Idl, programId, provider);

  //   const candyMachineId = new PublicKey("CRq2SEvfaC6dHXCRryooPb2noQuBAf77JRgfVFWX8A5C"); // Replace with your Candy Machine ID
    
  //   // Get raw account data first
  //   const accountInfo = await provider.connection.getAccountInfo(candyMachineId);
    
  //   if (!accountInfo) {
  //     throw new Error("Candy Machine account not found");
  //   }
  //   const candyMachineAccount = program.coder.accounts.decode(
  //     'candyMachine',
  //     accountInfo.data
  //   );

    
    


  //     const itemsAvailable = candyMachineAccount.data.itemsAvailable.toNumber()
  //     setMaxitems(itemsAvailable)
  //     const itemsRedeemed = candyMachineAccount.itemsRedeemed.toNumber()
  //     setMinted(itemsRedeemed);
  //     const itemsRemaining = itemsAvailable - itemsRedeemed
  //     const goLiveDate = candyMachine.data.goLiveDate.toNumber()
  //     const preSale = candyMachine.data.whitelistMintSettings && candyMachine.data.whitelistMintSettings.preSale && (!candyMachine.data.goLiveDate || candyMachine.data.goLiveDate.toNumber() > new Date().getTime()/1000)
  //     const goLiveDateTimeString = `${new Date(goLiveDate * 1000).toGMTString()}`
  //     setCandyMachine({
  //       id: "CRq2SEvfaC6dHXCRryooPb2noQuBAf77JRgfVFWX8A5C",
  //       program,
  //       state: {
  //         itemsAvailable,
  //         itemsRedeemed,
  //         goLiveDate,
  //         ispreSale: preSale,
  //         goLiveDateTimeString,
  //         isSoldOut: itemsRemaining === 0,
  //         isActive:
  //       candyMachine.data.goLiveDate &&
  //       candyMachine.data.goLiveDate.toNumber() < new Date().getTime() / 1000 &&
  //       (candyMachine.endSettings
  //         ? candyMachine.endSettings.endSettingType.date
  //           ? candyMachine.endSettings.number.toNumber() > new Date().getTime() / 1000
  //           : itemsRedeemed < candyMachine.endSettings.number.toNumber()
  //         : true),
  //         treasury: candyMachine.wallet.toString(),
  //         tokenMint: candyMachine.tokenMint,
  //         gatekeeper: candyMachine.data.gatekeeper,
  //         endSettings: candyMachine.data.endSettings,
  //         whitelistMintSettings: candyMachine.data.whitelistMintSettings,
  //         hiddenSettings: candyMachine.data.hiddenSettings,
  //         price: candyMachine.data.price.toLocaleString()
  //       }
  //     })
  //     } catch (error) {
  //       setError("Failed to load candy machine");
  //       console.log("Erros is on GetCandyMachine",error)

  //     }  
  //     setIsLoading(false);

      
  //   }





    const getCandyMachineState = async() => {
    try {
      const provider = getProvider()
      const idl = await Program.fetchIdl(candyMachineProgram, provider)
      const program = new Program(idl, candyMachineProgram, provider)
      const candyMachine = await program.account.candyMachine.fetch(
        process.env.REACT_APP_CANDY_MACHINE_ID
      )

      const itemsAvailable = candyMachine.data.itemsAvailable.toNumber()
      setMaxitems(itemsAvailable)
      const itemsRedeemed = candyMachine.itemsRedeemed.toNumber()
      setMinted(itemsRedeemed);
      const itemsRemaining = itemsAvailable - itemsRedeemed
      const goLiveDate = candyMachine.data.goLiveDate.toNumber()
      const preSale = candyMachine.data.whitelistMintSettings && candyMachine.data.whitelistMintSettings.preSale && (!candyMachine.data.goLiveDate || candyMachine.data.goLiveDate.toNumber() > new Date().getTime()/1000)
      const goLiveDateTimeString = `${new Date(goLiveDate * 1000).toGMTString()}`
      setCandyMachine({
        id: process.env.REACT_APP_CANDY_MACHINE_ID,
        program,
        state: {
          itemsAvailable,
          itemsRedeemed,
          goLiveDate,
          ispreSale: preSale,
          goLiveDateTimeString,
          isSoldOut: itemsRemaining === 0,
          isActive:
        candyMachine.data.goLiveDate &&
        candyMachine.data.goLiveDate.toNumber() < new Date().getTime() / 1000 &&
        (candyMachine.endSettings
          ? candyMachine.endSettings.endSettingType.date
            ? candyMachine.endSettings.number.toNumber() > new Date().getTime() / 1000
            : itemsRedeemed < candyMachine.endSettings.number.toNumber()
          : true),
          treasury: candyMachine.wallet.toString(),
          tokenMint: CandyMachine.tokenMint,
          gatekeeper: candyMachine.data.gatekeeper,
          endSettings: candyMachine.data.endSettings,
          whitelistMintSettings: candyMachine.data.whitelistMintSettings,
          hiddenSettings: candyMachine.data.hiddenSettings,
          price: candyMachine.data.price.toLocaleString()
        }
      })
    } catch (error) {
      console.error("Error fetching candy machine state:", error);
      setError("Failed to load candy machine details");
      
    }
      
    }

  

    // const getCandyMachineState = async() => {
    //   setIsLoading(true);
    //   setError(null);
      
    //   try {
    //     const provider = getProvider();
    //     if (!provider) {
    //       setError("Wallet not connected");
    //       setIsLoading(false);
    //       return;
    //     }

    //     const program = new Program(Idl,candyMachineProgram , provider);
    //     const candyMachineId = new web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID);
    //     const accountInfo = await provider.connection.getAccountInfo(candyMachineId);
        
    //     if (!accountInfo) {
    //       throw new Error("Candy Machine account not found");
    //     }
    //   const  candyMachineAccount = await program.account.candyMachine.fetch(candyMachineId);

    
    //      candyMachineAccount = program.coder.accounts.decode(
    //       'candyMachine',
    //       accountInfo.data
    //     );
    
    //     const itemsAvailable = candyMachineAccount.data.itemsAvailable.toNumber();
    //     const itemsRedeemed = candyMachineAccount.itemsRedeemed.toNumber();
        
    //     setCandyMachine({
    //       id: process.env.REACT_APP_CANDY_MACHINE_ID,
    //       program,
    //       state: {
    //         itemsAvailable,
    //         itemsRedeemed,
    //         isSoldOut: itemsAvailable === itemsRedeemed,
    //         isActive: true, // Update with your actual activation logic
    //         treasury: candyMachineAccount.wallet.toString(),
    //         tokenMint: candyMachineAccount.tokenMint,
    //         collectionMint: COLLECTION_MINT.toString(),
    //         price: candyMachineAccount.data.price.toNumber() / web3.LAMPORTS_PER_SOL, // Convert to SOL
    //         symbol: candyMachineAccount.data.symbol,
    //         sellerFeeBasisPoints: candyMachineAccount.data.sellerFeeBasisPoints
    //       }
    //     });
    //   } catch (error) {
    //     console.error("Failed to load candy machine:", error);
    //     setError("Failed to load candy machine details");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    

    const reloadWindow = () => {
        const itemsRedeemed = localStorage.getItem('minted')
        const redeemed = parseInt(itemsRedeemed)
        const NFTminted = parseInt(minted)
        if (redeemed < NFTminted) {
              setTimeout(function () {
        window.location.reload(true);
    }, 3000);
        }
    }

    useEffect(() => {
      getCandyMachineState()
      reloadWindow()
    }, [minted])

    const getProvider = () => {
      
      //   const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST
      // const connection = new Connection(rpcHost)
      // const provider = new AnchorProvider(connection, window.solana, opts.preflightCommitment)
      // 
      
      const opts = {
        preflightCommitment: "processed",
      };
    
      const connection = new Connection(
        process.env.REACT_APP_SOLANA_RPC_HOST,
        opts.preflightCommitment
      );
    
      const provider = new AnchorProvider(
        connection,
        window.solana, // or useWallet() if using wallet adapter context
        opts
      );
      return provider
    }


    

  const getCandyMachineCreator = async (candyMachine) => {
    const candyMachineID = new PublicKey(candyMachine);
    return await web3.PublicKey.findProgramAddress(
        [Buffer.from('candy_machine'), candyMachineID.toBuffer()],
        candyMachineProgram,
    );
  };

  const getMetadata = async (mint) => {
    return (
      await PublicKey.findProgramAddress(
        [
          Buffer.from('metadata'),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const getMasterEdition = async (mint) => {
    return (
      await PublicKey.findProgramAddress(
        [
          Buffer.from('metadata'),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
          Buffer.from('edition'),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const createAssociatedTokenAccountInstruction = (
    associatedTokenAddress,
    payer,
    walletAddress,
    splTokenMintAddress
  ) => {
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
      { pubkey: walletAddress, isSigner: false, isWritable: false },
      { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
      {
        pubkey: web3.SystemProgram.programId,
        isSigner: false,
        isWritable: false,
      },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      {
        pubkey: web3.SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
    ];
    return new web3.TransactionInstruction({
      keys,
      programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
      data: Buffer.from([]),
    });
  };

  const mintToken = async () => {
    const mint = web3.Keypair.generate();
    if (!candyMachine || !candyMachine.state) {
      console.error("Candy Machine not loaded yet");
      return;
    }

    const userTokenAccountAddress = (
      await getAtaForMint(mint.publicKey, walletAddress.publicKey)
    )[0];
  
    const userPayingAccountAddress = candyMachine.state.tokenMint
      ? (await getAtaForMint(candyMachine.state.tokenMint, walletAddress.publicKey))[0]
      : walletAddress.publicKey;
  
    const candyMachineAddress = candyMachine.id;
    const remainingAccounts = [];
    const signers = [mint];
    const cleanupInstructions = [];
    const instructions = [
      web3.SystemProgram.createAccount({
        fromPubkey: walletAddress.publicKey,
        newAccountPubkey: mint.publicKey,
        space: MintLayout.span,
        lamports:
          await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(
            MintLayout.span,
          ),
        programId: TOKEN_PROGRAM_ID,
      }),
      Token.createInitMintInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        0,
        walletAddress.publicKey,
        walletAddress.publicKey,
      ),
      createAssociatedTokenAccountInstruction(
        userTokenAccountAddress,
        walletAddress.publicKey,
        walletAddress.publicKey,
        mint.publicKey,
      ),
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        userTokenAccountAddress,
        walletAddress.publicKey,
        [],
        1,
      ),
    ];
  
    if (candyMachine.state.gatekeeper) {
      remainingAccounts.push({
        pubkey: (
          await getNetworkToken(
            walletAddress.publicKey,
            candyMachine.state.gatekeeper.gatekeeperNetwork,
          )
        )[0],
        isWritable: true,
        isSigner: false,
      });
      if (candyMachine.state.gatekeeper.expireOnUse) {
        remainingAccounts.push({
          pubkey: CIVIC,
          isWritable: false,
          isSigner: false,
        });
        remainingAccounts.push({
          pubkey: (
            await getNetworkExpire(
              candyMachine.state.gatekeeper.gatekeeperNetwork,
            )
          )[0],
          isWritable: false,
          isSigner: false,
        });
      }
    }
    if (candyMachine.state.whitelistMintSettings) {
      const mint = new web3.PublicKey(
        candyMachine.state.whitelistMintSettings.mint,
      );
  
      const whitelistToken = (await getAtaForMint(mint, walletAddress.publicKey))[0];
      remainingAccounts.push({
        pubkey: whitelistToken,
        isWritable: true,
        isSigner: false,
      });
  
      if (candyMachine.state.whitelistMintSettings.mode.burnEveryTime) {
        const whitelistBurnAuthority = web3.Keypair.generate();
  
        remainingAccounts.push({
          pubkey: mint,
          isWritable: true,
          isSigner: false,
        });
        remainingAccounts.push({
          pubkey: whitelistBurnAuthority.publicKey,
          isWritable: false,
          isSigner: true,
        });
        signers.push(whitelistBurnAuthority);
        const exists =
          await candyMachine.program.provider.connection.getAccountInfo(
            whitelistToken,
          );
        if (exists) {
          instructions.push(
            Token.createApproveInstruction(
              TOKEN_PROGRAM_ID,
              whitelistToken,
              whitelistBurnAuthority.publicKey,
              walletAddress.publicKey,
              [],
              1,
            ),
          );
          cleanupInstructions.push(
            Token.createRevokeInstruction(
              TOKEN_PROGRAM_ID,
              whitelistToken,
              walletAddress.publicKey,
              [],
            ),
          );
        }
      }
    }
  
    if (candyMachine.state.tokenMint) {
      const transferAuthority = web3.Keypair.generate();
  
      signers.push(transferAuthority);
      remainingAccounts.push({
        pubkey: userPayingAccountAddress,
        isWritable: true,
        isSigner: false,
      });
      remainingAccounts.push({
        pubkey: transferAuthority.publicKey,
        isWritable: false,
        isSigner: true,
      });
  
      instructions.push(
        Token.createApproveInstruction(
          TOKEN_PROGRAM_ID,
          userPayingAccountAddress,
          transferAuthority.publicKey,
          walletAddress.publicKey,
          [],
          candyMachine.state.price.toNumber(),
        ),
      );
      cleanupInstructions.push(
        Token.createRevokeInstruction(
          TOKEN_PROGRAM_ID,
          userPayingAccountAddress,
          walletAddress.publicKey,
          [],
        ),
      );
    }
    const metadataAddress = await getMetadata(COLLECTION_MINT);
   const masterEdition = await getMasterEdition(COLLECTION_MINT);
    // const metadataAddress = await getMetadata(mint.publicKey);
    // const masterEdition = await getMasterEdition(mint.publicKey);
  
    const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(
      candyMachineAddress,
    );
  
    instructions.push(
      await candyMachine.program.instruction.mintNft(creatorBump, {
        accounts: {
          candyMachine: candyMachineAddress,
          candyMachineCreator,
          payer: walletAddress.publicKey,
          wallet: candyMachine.state.treasury,
          mint: mint.publicKey,
          metadata: metadataAddress,
          masterEdition,
          mintAuthority: walletAddress.publicKey,
          updateAuthority: walletAddress.publicKey,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
          clock: web3.SYSVAR_CLOCK_PUBKEY,
          recentBlockhashes: web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          instructionSysvarAccount: web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        },
        remainingAccounts:
          remainingAccounts.length > 0 ? remainingAccounts : undefined,
      }),
    );
  
    try {
      return (
        await sendTransactions(
          candyMachine.program.provider.connection,
          candyMachine.program.provider.wallet,
          [instructions, cleanupInstructions],
          [signers, []],
        )
      ).txs.map(t => t.txid);
    } catch (e) {
      console.log(e);
    }
        
    return [];
  };



  return (

   <div className="mint-container">

      {/* <p>Drop Date: {candyMachine.state.goLiveDateTimeString}</p>
      <p>Items Minted:{candyMachine.state.itemsRedeemed}/{candyMachine.state.itemsAvailable}</p> */}
      {/*<button className="cta-button text-white mint-button transition-all duration-300 hover:-translate-y-[1px]" onClick={mintToken}>
        Mint NFT
      </button>*/}
     
{/*
{!isLoading ? (
  candyMachine ? (
    <Button onClick={mintToken}>Mint NFT</Button>
  ) : (
    <p>Failed to load Candy Machine.</p>
  )
) : (
  <p>Loading mint...</p>
)}
*/}

      {/*}
      {isLoading ? (
      <p>Loading candy machine...</p>
    ) : candyMachine ? (
      <button 
        className="cta-button text-white mint-button transition-all duration-300 hover:-translate-y-[1px]" 
        onClick={mintToken}
        disabled={!candyMachine.state.isActive}
      >
        {candyMachine.state.isActive ? "Mint NFT" : "Minting not active"}
      </button>
    ) : (
      <p>Failed to load candy machine</p>
    )}
      {isLoading ? (
        <div className="loading">Loading candy machine details...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : candyMachine ? (
        <>
          <div className="mint-stats">
            <p>{candyMachine.state.itemsRedeemed} / {candyMachine.state.itemsAvailable} minted</p>
            {!candyMachine.state.isActive && (
              <p>Mint opens: {candyMachine.state.goLiveDateTimeString}</p>
            )}
          </div>
          <button
            className="mint-button"
            onClick={mintToken}
            disabled={!candyMachine.state.isActive || candyMachine.state.isSoldOut}
          >
            {candyMachine.state.isSoldOut 
              ? "SOLD OUT" 
              : candyMachine.state.isActive 
                ? "MINT NOW" 
                : "MINT CLOSED"}
          </button>
        </>
      ) : (
        <div className="error">No candy machine detected</div>
      )}*/}
    {isLoading ? (
      <p>Loading candy machine...</p>
    ) : error ? (
      <p className="error">Error: {error}</p>
    ) : candyMachine ? (
      <>
        <div className="mint-info">
          <p>Minted: {candyMachine.state.itemsRedeemed}/{candyMachine.state.itemsAvailable}</p>
          {candyMachine.state.goLiveDate && (
            <p>Go Live: {candyMachine.state.goLiveDateTimeString}</p>
          )}
          <p>Price: {candyMachine.state.price} SOL</p>
        </div>
        <button 
          onClick={mintToken}
          disabled={!candyMachine.state.isActive || candyMachine.state.isSoldOut}
        >
          {candyMachine.state.isSoldOut ? 'SOLD OUT' : 'MINT NFT'}
        </button>
      </>
    ) : (
      <p>No candy machine found</p>
    )}

    </div>
  );
};

export default CandyMachine;
