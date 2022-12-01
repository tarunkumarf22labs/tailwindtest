import React from 'react'
import  houseing from   '../../assets/images.jpg'
function Contact() {
  return (
    <>
     <header  >
        <nav className=' p-4  shadow-lg bg-black text-white' >
        <div className="font-bold">
                <span>Chef Table</span>
             </div>
        </nav>
     </header>
      <section className="bg-gray-300 min-w-fit min-h-screen flex  md: justify-center items-center">
        <article className='bg-white w-full flex flex-col justify-between items-center  p-8 m-4  md:flex-row' >
            <div className="pr-8">
               <h2 className='font-bold pb-8' >Need help?</h2>
               <p  className = ' pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta ipsam nostrum ad debitis ut.
                  Lorem, ipsum dolor sit amet
               </p>
               <img src= {houseing} alt="" srcset=""  className='w-full shrink-0 mb-4' />
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
      <footer className='bg-black text-white p-8' >
          <div className="footer-logo text-center ">
          <div className="font-bold">
                <span>Chef Table</span>
             </div>
          </div>
           <div className="grid grid-cols-1 justify-items-center pt-4 sm:grid-cols-2 md:grid-cols-4 ">
              <div className="">
               <div className="text-left">
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum?</h3>
                  <div className="">
                     <ul className='flex justify-center' >
                        <li className='p-3' > 😃 </li>
                        <li className='p-3'>  😃 </li>
                        <li className='p-3' > 😃 </li>
                     </ul>
                  </div>
                  </div>
              </div>
              <div className="">
              <div className="text pb-3"><h2>About</h2></div>
               <ul>
                  <li> How it works </li>
                  <li>our story</li>
                  <li>our chefs</li>
              </ul>
            
              </div>
              <div className="">
              <div className="text pb-3"><h2>About</h2></div>
               <ul>
                  <li> How it works </li>
                  <li>our story</li>
                  <li>our chefs</li>
              </ul>
              </div>
              <div className="">
              <div className="text pb-3"><h2>About</h2></div>
               <ul>
                  <li> How it works </li>
                  <li>our story</li>
                  <li>our chefs</li>
              </ul>
              </div>
           </div>
      </footer>
    </>
  )
}

export default Contact