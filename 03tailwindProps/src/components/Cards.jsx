import React from 'react';

function Card({userName , btnText=" Click Me"}) {
    return ( 

        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mt-4">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>


    )
}

export default Card;