import React from "react"
import logo from './assets/Logo_Swapchain_Bold_Subline.svg'
import { useMediaQuery } from 'react-responsive'
import { Project } from "./StartingPage";


export function Home() {
    window.location.href = 'StartingPage.tsx';
  }


export function Github() {
  window.location.href ='https://github.com/chronark/swapchain'
}


export default () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'})

    return (
    <div>
    {isDesktopOrLaptop &&
    <p>
        <div className="">
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
            <img src={logo} alt="swapchain logo" width="100" height="100" className="ml-10" />
        </div>
        <div className="">
        </div>
                <button onClick={Home} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                Home
                </button>
                <button onClick={Project} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                About the Project
                </button>
                <button onClick={Github} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                GitHub
                </button>  
        </nav>
        <section className="bg-green-500 p-10">
                <form className="w-full">
                <div className="flex flex-wrap mx-64 mb-2 max-w-lg">
                </div>
                <h1 className= "text-center font-bold">What are ACCS?</h1>
                <br></br>
                <p className="text-center">A cross-chain atomic swap is method of exchanging different cryptocurrencies directly between two peers.Like trading dollars for pesos, it's a process in which two people can exchange one cryptocurrency for another, but without trust or third-party moderation. We say the swaps are "atomic" because they must be all-or-nothing. To protect both users, there must be no scenario in which one person can controlboth coins at the same time.Atomic swaps can be executed between many blockchains, but not all. For the scheme to work, both chains need some kind of relative timelock operation (like OP_CHECKSEQUENCEVERIFY), as well as the ability to hash a blob of data and check against a given hash.In this guide we'll be focusing on just Bitcoin and Bitcoin Cash, using the bcoin and bcash libraries respectively. It's a bit of a game: the rules can't be broken, but you still have to pay attention. The magic machine at the core of the atomic swap is called the Hash Time-Locked Contract, or HTLC.Source: <a href="https://bcoin.io/guides/swaps.html"><span className="underline">https://bcoin.io/guides/swaps.html</span></a></p>
                <div className="flex flex-wrap mx-64 mb-6">
                </div>    
            </form>
        </section>
        </div> 
        </p>}
        {isTabletOrMobileDevice &&
        <p>
        <div className="">
        <nav className="mb-6">
        <div className="">
            <img src={logo} alt="swapchain logo" width="100" height="100" className="mx-auto mt-10 mb-5" />
        </div>
        <div className="flex justify-between ml-2 mr-2">
                <button onClick={Home} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                Home
                </button>
                <button onClick={Project} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                About the Project
                </button>
                <button onClick={Github} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
                GitHub
                </button>  
        </div>
        </nav>
        <section className="bg-green-500 p-10">
                <form className="w-full">
                <div className="flex flex-wrap mx-64 mb-2 max-w-lg">
                </div>
                <h1 className= "text-center font-bold">What are ACCS?</h1>
                <br></br>
                <p className="text-center">A cross-chain atomic swap is method of exchanging different cryptocurrencies directly between two peers.Like trading dollars for pesos, it's a process in which two people can exchange one cryptocurrency for another, but without trust or third-party moderation. We say the swaps are "atomic" because they must be all-or-nothing. To protect both users, there must be no scenario in which one person can controlboth coins at the same time.Atomic swaps can be executed between many blockchains, but not all. For the scheme to work, both chains need some kind of relative timelock operation (like OP_CHECKSEQUENCEVERIFY), as well as the ability to hash a blob of data and check against a given hash.In this guide we'll be focusing on just Bitcoin and Bitcoin Cash, using the bcoin and bcash libraries respectively. It's a bit of a game: the rules can't be broken, but you still have to pay attention. The magic machine at the core of the atomic swap is called the Hash Time-Locked Contract, or HTLC.Source: <a href="https://bcoin.io/guides/swaps.html"><span className="underline">https://bcoin.io/guides/swaps.html</span></a></p>
                <div className="flex flex-wrap mx-64 mb-6">
                </div>    
            </form>
        </section>
        </div>   
    </p>}
    </div>
                
        )
    }
    




