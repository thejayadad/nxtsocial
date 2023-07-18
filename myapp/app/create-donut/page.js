import React from 'react'

const CreateDonut = () => {
  return (
    <section className="min-h-[calc(100vh-73px)] max-w-screen-xl mx-auto p-4">
        <div>
        <h1 className="font-extrabold text-accent text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Tasty Memories By Sharing Those Tasty Creations</p>
        </div>
        <form 
        className="mt-6 max-w-3xl"
        >
        <div className="flex flex-col gap-5">
        <label
        className="block text-sm font-medium text-gray-900"
      >
        Title
      </label>
      <input 
        placeholder='Title'
        className="input input-bordered input-md w-full max-w-xl"

      />
      <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
        
      </div>
        </div>

        <button
        type='submit'
        className='btn btn-primary mt-3'
        >
            Share Donut
        </button>
        </form>
      
    </section>
  )
}

export default CreateDonut