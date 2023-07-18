import React from 'react'

const SingleDonut = ({title, _id, creator, imageUrl, likes}) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
            src={imageUrl}
            alt='image'
            className="w-full h-auto object-cover rounded-xl"

        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto">{title}</p>

        </div>
    </div>
  )
}

export default SingleDonut