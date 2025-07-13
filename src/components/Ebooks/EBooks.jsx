import React from 'react'

function EBooks() {
  return (
    <div className="flex text-white justify-center items-center my-5">
      <div className="flex flex-col gap-5 w-[90%] sm:w-[85%] p-5">
        <h1 className='text-[#facc15] text-2xl'>Discover the World of E-Books with VBookZ</h1>
        <p className='sm:text-lg text-justify'>
          At VBookZ, we embrace the digital era of reading. Our E-Books collection offers instant access to thousands of titles across genres. Whether you prefer reading on a tablet, smartphone, or computer, our e-books bring convenience and joy to your reading life.
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Instant download and access</li>
          <li>Portable and eco-friendly</li>
          <li>A growing library with popular and niche titles</li>
        </ul>
      </div>
    </div>
  )
}

export default EBooks
