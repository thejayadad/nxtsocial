
"use client";

import DonutShowcase from '@/components/DonutShowcase'
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";


const ProfilePage = ({params}) => {
  const { data: session } = useSession();

  return (
    <section className="min-h-[calc(100vh-73px)] max-w-screen-xl mx-auto p-4">
    <div>
        <h1 className="font-extrabold text-accent text-[32px]">ProfilePage</h1>
        <p className="mt-2 mb-4 text-[#666e75] text-[14px] max-w-[500px]">Check Out These Individual Treats</p>
        <p>{}</p>
    </div>
    <div className="">
    <DonutShowcase />
    </div> 
    </section>
  )
}

export default ProfilePage