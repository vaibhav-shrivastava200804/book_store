import React from 'react'

function GiftCards() {
  return (
    <div className="flex text-white justify-center items-center my-5">
      <div className="flex flex-col gap-5  w-[90%] sm:w-[85%] p-5">
        <h1 className='text-[#facc15] text-2xl'>The Perfect Gift for Every Book Lover</h1>
        <p className='sm:text-lg text-justify'>
          Can’t decide what book to gift? Let them choose! VBookZ Gift Cards are a thoughtful way to inspire someone’s next favorite read. Available in various denominations, they make for ideal gifts on any occasion.
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Flexible and easy to redeem</li>
          <li>No expiry date</li>
          <li>A gift that guarantees joy for readers</li>
        </ul>
      </div>
    </div>
  )
}

export default GiftCards
