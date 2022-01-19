import React from 'react'
import Link from 'next/link'
function index() {
    return (
        <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 py-16">
        <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md">
            <div className="text-2xl font-semibold">
                <div className="text-gray-200">
                Start generating social image and increase your visibility.
                </div>
                <div className="text-white">
                Get Started for Free.
                </div>
            </div>
            <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2 flex-shrink-0">
                <Link href="/login">
                    <button className="bg-white py-2 px-4 rounded text-xl">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default index
