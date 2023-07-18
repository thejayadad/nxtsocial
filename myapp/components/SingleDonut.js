import React from 'react'

const SingleDonut = () => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
            src='https://images.pexels.com/photos/12833286/pexels-photo-12833286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='image'
            className="w-full h-auto object-cover rounded-xl"

        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto">Title</p>

        </div>
    </div>
  )
}

export default SingleDonut