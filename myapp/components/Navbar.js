"use client";
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);
  return (
    <header className="w-full flex justify-between items-center  sm:px-8 px-4 py-4 border-b border-b-primary bg-white">
        <Link href={'/'} alt="logo" className="w-28 object-contain">Home</Link>
       <nav className='flex gap-4'>
       {session?.user ? (
        <>
       <Link href={'/create-donut'}  className="btn btn-primary">Create</Link>
        <Link href={'/create-donut'}  className="btn btn-primary">Logout</Link>
        <Image
        src={session?.user.image}
        width={"50"}
        height={"50"}
        className=""
        style={{borderRadius: "50%"}}
        alt="Profile Picture"
        />
        </>
        ) : (
          <>
          
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                className="blue-btn"
                key={provider.name}
                onClick={() => signIn(providers.id)}
              >
                Sign In
              </button>
            ))}
          </>
        )}
       </nav>

    </header>
  )
}

export default Navbar