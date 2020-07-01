import React from "react"
import { Order } from "./Orderbook"
import { ReactComponent as X } from "../../icons/x.svg"
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg"
import { ReactComponent as ArrowRight } from "../../icons/arrow-narrow-right.svg"
import { ReactComponent as Refresh } from "../../icons/refresh.svg"

type Props = {
    close: () => void
    open: boolean,
    order: Order
}


export default (props: Props) => {
    const { open, close, order } = props
    return (
        <div className={open ? "" : "hidden"}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="max-w-xs p-12 bg-white rounded sm:max-w-sm md:max-w-md lg:max-w-xl">
                    <header className="flex flex-row-reverse">
                        <X className="w-8 h-8 text-gray-400 duration-200 ease-in-out hover:text-gray-800" onClick={close}></X>
                    </header>
                    <div className="flex flex-col items-center justify-around md:flex-row ">

                        <div className="flex flex-col mx-8 md:items-center">
                            <span className="text-sm font-semibold text-gray-400">{order.give.asset}</span>
                            <span className="font-mono text-lg text-gray-700">
                                {order.give.value.toFixed(10)}
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-around font-mono text-gray-600 ">
                            <ChevronDown className="h-12 text-gray-400 md:hidden"></ChevronDown>

                            <div className="flex-row items-center hidden md:flex">
                                <div className="flex items-center">

                                    <span>{order.exchangeRate.toFixed(4)}</span>
                                    <div className="flex flex-col ml-1 text-xs tracking-tight text-gray-500">
                                        <span>{order.receive.asset}</span>
                                        <div className="border-t border-gray-400 "></div>
                                        <span>{order.give.asset}</span>
                                    </div>
                                </div>
                            </div>
                            <ArrowRight className="hidden h-12 text-gray-400 md:block"></ArrowRight>
                        </div>
                        <div className="flex flex-col mx-8 md:items-center">
                            <span className="text-sm font-semibold text-gray-400">{order.receive.asset}</span>
                            <span className="font-mono text-lg text-gray-700">
                                {order.receive.value.toFixed(10)}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8 text-gray-500">
                        <span className="text-xs">
                            Valid until:
                            </span>
                        <span className="text-sm font-semibold">

                            {order.validUntil.toLocaleString("default", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                        </span>
                    </div>
                    <footer className="flex items-center justify-around pt-12 mt-8 text-center border-t border-gray-300">
                        {(order.status.label === "active") ?
                            <button className={`inline-flex py-2 px-4 uppercase font-semibold rounded bg-${order.status.color}-200 text-${order.status.color}-900 rounded hover:bg-gray-400`}>
                                <Refresh className="w-6 h-6"></Refresh>
                                <span className="ml-2">
                                    Trade
                           </span>
                            </button>
                            : <span className={`py-2 px-4 uppercase font-semibold rounded bg-${order.status.color}-200 text-${order.status.color}-900`}>
                                {order.status.label}
                            </span>
                        }

                    </footer>
                </div>

            </div>
        </div>
    )
}


