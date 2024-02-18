import React from 'react'

const Connect = () => {
  return (
    <div className="bg-orange-600 mt-12 py-20 pr-[300px] text-white">
        <div className="max-w-md w-1/2 ml-[900px]">
            <h1 className="text-3xl font-semibold mb-4">
                KEEP IN TOUCH
            </h1>
            <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa incidunt
                facilis molestias nesciunt ratione tempore, voluptatum iure neque labore
                deleniti maiores rerum quaerat unde, asperiores optio esse dolor
                necessitatibus odit quo quae numquam aliquam! Numquam hic eveniet
                architecto odit.
            </p>
            <div className="flex">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-1 bg-transparent text-sm text-white placeholder-white rounded-tl-md rounded-bl-md px-4 py-2"
                />
                <button className="bg-white text-gray-900 px-4 font-semibold rounded-tr-md rounded-br-md hover:bg-transparent">
                    Join
                </button>
            </div>
        </div>
    </div>
  )
}

export default Connect