import React from 'react'

function ReadingChallenges() {
  return (
    <div className="flex text-white justify-center items-center my-5">
      <div className="flex flex-col gap-5 w-[90%] sm:w-[85%] p-5">
        <h1 className='text-[#facc15] text-2xl'>Challenge Yourself, Expand Your World</h1>
        <p className='sm:text-lg text-justify'>
          Join our VBookZ Reading Challenges and make your reading goals more exciting. Whether it's reading across genres, tackling classics, or completing a set number of books each year, our challenges help you stay motivated and engaged.
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Track your progress</li>
          <li>Earn badges and rewards</li>
          <li>Share achievements with the VBookZ community</li>
        </ul>
      </div>
    </div>
  )
}

export default ReadingChallenges
