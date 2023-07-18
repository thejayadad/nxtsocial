import DonutShowcase from '@/components/DonutShowcase'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="sm:p-8 px-2 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] max-w-screen-xl m-auto">
         <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">The Donut Shop</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px] mb-4">The Place to share all things related to those tasty treats. Feel free to share with a friend and post what you like.</p>
      </div>
      <DonutShowcase />
    </main>
  )
}
