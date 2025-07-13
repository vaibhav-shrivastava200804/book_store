import React from 'react'

function HelpCenter() {
  return (
    <div className="flex text-white justify-center items-center my-5">
      <div className="flex flex-col gap-5  w-[90%] sm:w-[85%] p-5">
        <h1 className='text-[#facc15] text-2xl'>We're Here to Help!</h1>
        <p className='sm:text-lg text-justify'>
          Need assistance with your orders, account, or navigating VBookZ? Visit our Help Center for quick answers, helpful guides, and dedicated support.
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>FAQs for common questions</li>
          <li>Contact support for personalized help</li>
          <li>Step-by-step guides for using VBookZ features</li>
        </ul>
      </div>
    </div>
  )
}

export default HelpCenter
