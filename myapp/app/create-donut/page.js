'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { getServerSession } from "next-auth/next";
import {authOptions} from "../api/auth/[...nextauth].js"


const CreateDonut = () => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
  
    const session = await getServerSession(authOptions);
    e.preventDefault();

    // if (!photo || !title) {
    //   toast.error('All fields are required');
    //   return;
    // }
    

    try {
      const imageUrl = await convertToBase64(photo);

      const res = await fetch(`http://localhost:3000/api/donut`, {
        method: 'POST',
        body: JSON.stringify({ title, imageUrl, creator: session.user.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Error occurred');
      }

      const memory = await res.json();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
    setPreviewPhoto(URL.createObjectURL(selectedFile));
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPreviewPhoto(null);
  };

  return (
    <section className="min-h-[calc(100vh-73px)] max-w-screen-xl mx-auto p-4">
      <div>
        <h1 className="font-extrabold text-accent text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Tasty Memories By Sharing Those Tasty Creations
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 max-w-3xl">
        <input
          id="image"
          type="file"
          style={{ display: 'none' }}
          onChange={handlePhotoChange}
        />
        <div className="flex flex-col gap-5">
          <label className="block text-sm font-medium text-gray-900">Title</label>
          <input
            placeholder="Title"
            className="input input-bordered input-md w-full max-w-xl"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="flex flex-col">
            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
              {!previewPhoto ? (
                <label className="cursor-pointer btn bg-primary" htmlFor="image">
                  <p>Upload Image</p>
                </label>
              ) : (
                <>
                  <div className="relative bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                    <img
                      src={previewPhoto}
                      alt="selected memory"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-center align-center">
                    <button type="submit" className="btn btn-sm btn-primary mt-3">
                      Create
                    </button>
                    <button className="mt-3 btn btn-sm bg-warning" onClick={handleRemovePhoto}>
                      Remove
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateDonut;
