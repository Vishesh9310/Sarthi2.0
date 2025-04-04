import React from 'react'
import logo6 from '../assets/jpg/logo6.jpg'

function Button() {
    return (
        <>
            <button type="button" className="bg-indigo-500 inline-flex" disabled>
                <img src={logo6} alt="" className='mr-3 size-5 animate-spin' />
                Processing…
            </button>

            <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>

            <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                <div class="flex animate-pulse space-x-4">
                    <div class="size-10 rounded-full bg-gray-200"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                            </div>
                            <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={logo6} alt="" className='size-6 animate-bounce' />
           
        </>
    )
}

export default Button