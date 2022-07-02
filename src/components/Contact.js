import React from 'react'


const Contact = () => {
  
  return (
    <div name='contact' className='w-full h-screen bg-[#ffffff] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c154880a-4be3-4e0a-94c2-eb06319dacf1" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-black-900'>Contact</p>
                <p className='text-black-900 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact