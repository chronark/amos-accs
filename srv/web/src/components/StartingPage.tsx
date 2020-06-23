import React from "react"
import swapchain_gif from './assets/swapchain_gif.gif'
import { useMediaQuery } from 'react-responsive'


export function Orderbook() {
  window.location.href = 'Orderbook.tsx'
}

export function ACCS() {
  window.location.href = 'ACCS.tsx'
}

export function Project() {
  window.location.href = 'AboutProject.tsx'
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
  
  <div className="block ">
  <nav className="block flex items-center justify-between flex-wrap bg-white p-6">
  <div className="block flex items-center flex-shrink-0 text-white mr-6">
    <img src={swapchain_gif} alt="cool swapchain gif" width="300" height="300" />
  </div>
  <div className="block">
  <span><div className="d-flex .justify-content-center flex-wrap bg-white p-2 text-black font-bold p-2">Peer to Peer trading across blockchains - entirely trustless!<br/></div></span>
  <span><div className="d-flex .justify-content-center flex-wrap bg-white p-2 text-black font-bold p-2">Atomic Cross-Chain Swaps powered by Swapchain.</div></span>
  </div>
        <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
          What are ACCS?
        </button>
        <button onClick={Project} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
          About the Project
        </button>
        <button onClick={Github} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded">
          GitHub
        </button>  
  </nav>
  <span className="block bg-green-500 p-10">
        <form className="block w-full max-w-6xl">huhu
        <div className="block flex flex-wrap mx-64 mb-2 max-w-lg">
        <div className="block w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Your email address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="swapchain_mockup@gmail.com"></input>
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Your Crypto Address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="1N52wHoVR79PMDishab2XmRHsbekCdGquK"></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Set your Timelock
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>2 hours</option>
                <option>4 hours</option>
                <option>6 hours</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <p className="text-yellow-500 text-xs italic">* You can access your crypto as soon as the timelock expires.</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Set your Transaction Fee
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>5000 Satoshi</option>
                <option>10000 Satoshi</option>
                <option>15000 Satoshi</option>
                <option>20000 Satoshi</option>
                <option>25000 Satoshi</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <p className="text-yellow-500 text-xs italic">* The higher the fees, the faster your transaction is processed.</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-64">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Bid
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>BTC</option>
                <option>BTS</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Ask
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>BTS</option>
                <option>BTC</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          </div>
        <div className="flex flex-wrap mx-64 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1 BTC"></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="10000 BTS"></input>
          </div>
        </div>
        <div className="flex flex-wrap mx-64 mb-6 text-center">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6 text-center">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Expiry Date for your order
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="DD/MM/YY"></input>
          </div>
        </div>
          <div className="flex flex-wrap mx-10 mb-6 ">
            <div className="w-full px-3">
              <button onClick={Orderbook} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8">Send to Orderbook</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8">Find a match!</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8">Already have a recipient?</button>
              <button onClick={Orderbook} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-">Browse Orderbook</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Edit your orders</button>
        </div>
      </div>
    </form>
  </span>
</div>   
</p>}
{isTabletOrMobileDevice &&
    <p>
 <div className="block">
  <nav className="flex justify-center flex-wrap bg-white p-6">
  <div className="flex flex-shrink-0 text-white ">
    <img src={swapchain_gif} alt="cool swapchain gif" width="300" height="300" />
  </div>
  <div className="">
  <span><div className="justify-content-center flex-wrap bg-white p-2 text-black font-bold p-2 text-center">Peer to Peer trading across blockchains - entirely trustless!<br/></div></span>
  <span><div className="justify-content-center flex-wrap bg-white p-2 text-black font-bold p-2 text-center mb-8">Atomic Cross-Chain Swaps powered by Swapchain.</div></span>
  </div>
        <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mb-8">
          What are ACCS?
        </button>
        <button onClick={Project} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mb-8">
          About the Project
        </button>
        <button onClick={Github} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded content-center">
          GitHub
        </button>  
  </nav>
  <span className="block bg-green-500 p-10 text-center">
        <form className="block w-full ">
        <div className="block flex flex-wrap">
        <div className="block w-full">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold">
              Your email address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-4" id="grid-password" type="password" placeholder="swapchain_mockup@gmail.com"></input>
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2 mt-4">
              Your Crypto Address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-4" id="grid-password" type="password" placeholder="1N52wHoVR79PMDishab2XmRHsbekC"></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Set your Timelock
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-4" id="grid-state">
                <option>2 hours</option>
                <option>4 hours</option>
                <option>6 hours</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <p className="text-yellow-500 text-xs italic">* You can access your crypto as soon as the timelock expires.</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Set your Transaction Fee
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>5000 Satoshi</option>
                <option>10000 Satoshi</option>
                <option>15000 Satoshi</option>
                <option>20000 Satoshi</option>
                <option>25000 Satoshi</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <p className="text-yellow-500 text-xs italic">* The higher the fees, the faster your transaction is processed.</p>
          </div>
        </div>
        <div className="flex flex-wrap text-center">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Bid
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>BTC</option>
                <option>BTS</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          </div>
        <div className="flex flex-wrap text-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1 BTC"></input>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Ask
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>BTS</option>
                <option>BTC</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="10000 BTS"></input>
          </div>
        </div>
        <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-6">
            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2">
              Expiry Date for your order
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="DD/MM/YY"></input>
          </div>
        </div>
          <div className="flex flex-wrap text-center">
            <div className="w-full px-3">
              <button onClick={Orderbook} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Send to Orderbook</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Find a match!</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Already have a recipient?</button>
              <button onClick={Orderbook} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Browse Orderbook</button>
              <button onClick={ACCS} className="bg-white hover:bg-green-500 text-black font-bold py-2 px-4 border border-black-700 rounded mr-8 mt-8">Edit your orders</button>
        </div>
      </div>
    </form>
  </span>
</div>  
</p>}
</div>
    )
}






