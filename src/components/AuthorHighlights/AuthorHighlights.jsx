import React from 'react'

function AuthorHighlights() {
  return (
    <div className="flex text-white justify-center items-center my-5">
      <div className="flex flex-col gap-5 w-[90%] sm:w-[85%] p-5">
        <h1 className='text-[#facc15] text-2xl'>Celebrating Authors, One Story at a Time</h1>
        <p className='sm:text-lg text-justify'>
          At VBookZ, we love to shine a spotlight on the creators behind the stories. Our Author Highlights feature brings you closer to the lives, works, and inspirations of renowned and emerging writers from around the world.
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Exclusive interviews</li>
          <li>Featured author collections</li>
          <li>Insights into writing journeys and inspirations</li>
        </ul>
      </div>
    </div>
  )
}

export default AuthorHighlights
