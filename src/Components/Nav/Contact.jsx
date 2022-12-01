import React from 'react'
import  houseing from   '../../assets/images.jpg'
function Contact() {
  return (
    <>
     <header  >
        <nav className=' p-4  shadow-lg bg-black text-white' >
            <h1>Chef Table</h1>
        </nav>
     </header>
      <section className="bg-gray-300 min-w-fit min-h-screen flex  md: justify-center items-center">
        <article className='bg-white w-3/5 flex flex-col justify-between items-center  p-8   md:flex-row' >
            <div className="pr-8">
               <h2 className='font-bold pb-8' >Need help?</h2>
               <p  className = ' pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta ipsam nostrum ad debitis ut.
                  Lorem, ipsum dolor sit amet
               </p>
               <img src= {houseing} alt="" srcset=""  className='w-full shrink-0' />
            </div>
            <div className="">
               <form action=""> 
               <input className='bg-gray-100 w-full p-2 mb-4' type="text"  placeholder='your name' />
               <input className='bg-gray-100 w-full p-2 mb-4'  type="text"  placeholder='Your email' />
               <input className='bg-gray-100 w-full p-2 mb-4'   type="text" placeholder='Phone number' />
               <textarea className='bg-gray-100 w-full p-2 mb-4'  name="" id="" cols="30" rows="10" placeholder='your thoughts'  ></textarea>
               <button className='bg-black text-white w-full p-2 mb-4'  > Submit Feedback</button> 
               </form>
            </div>
        </article>
      </section>
    </>
  )
}

export default Contact