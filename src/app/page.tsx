import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='bg-slate-200 h-screen w-screen text-black flex items-center justify-center flex-row border-teal-200'>
        <h2 className='font-medium text-2xl '>Home Page</h2>
         <Link href={'./Login'} className='text-center ml-40 h-30 w-32 p-2 rounded-xl text-white text-lg bg-slate-600'>LogIn</Link>
         <Link href={'./Signup'} className='text-center ml-40 h-30 w-32 p-2 rounded-xl text-white text-lg bg-slate-600'>SignUp</Link>
      </div> 
    </>
  )
}