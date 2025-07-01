import React from 'react'
import { useEffect, useState } from 'react'


function First() {
    const [books, setBooks] = useState([]);
    const limit = 8;
  
    useEffect(() => {
      async function fetchThrillerBooks() {
        try {
          const res = await fetch(`https://openlibrary.org/subjects/thriller.json?limit=${limit}`);
          const data = await res.json();
          setBooks(data.works || []);
        } catch (error) {
          console.error("Failed to fetch Thriller books:", error);
        }
      }
  
      fetchThrillerBooks();
    }, []);
  return (
    <div className='border-[#facc15] border-[2px] md:h-max h-[40rem] m-1 mt-4 rounded-sm flex flex-col gap-2  bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]'>
        <div className='Headline h-10 flex items-center p-3 bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] shadow-xl'>
            <h1 className='font-semibold text-white cursor-pointer hover:scale-105 duration-200 group'>Dive Into Danger: Thriller Picks <span className='group-hover:ml-2 duration-200'>&rarr;</span></h1>
        </div>
        <div className="cards custom-scroll flex-1 flex flex-col sm:flex-row items-center overflow-x-scroll gap-5 mb-1 p-1 shadow-2xl border h-max">
            {books.map((book) => (
          <div key={book.key} className="flex flex-col gap-1 border-[white] border-[1px] rounded-md w-[240px] h-[400px] sm:w-[200px] sm:h-[400px] p-1 flex-shrink-0 overflow-clip hover:overflow-auto custom-scroll">
            <img
              src={
                book.cover_id
                  ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                  : "https://via.placeholder.com/150x200?text=No+Cover"
              }
              alt={book.title}
              className="mb-2 w-[200px] h-[300px] sm:w-[180px] sm:h-[240px] border border-[#facc15] mt-1 mx-auto rounded-md cursor-pointer hover:scale-105 duration-200"
            />
            <div className="detail flex flex-col gap-2 sm:gap-0 mx-1 my-2 overflow-hidden  hover:overflow-y-scroll custom-scroll">
              <h3 className="text-white ml-1"><b className='font-extrabold uppercase text-[white]'>Title:</b> <span className='font-medium'>{book.title}</span>
              </h3>
              <p className="text-white ml-1">
                <b className='text-md font-extrabold uppercase text-[white]'>By: </b> <span className='font-medium'>{book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}</span>
              </p>
            </div>
          </div>
        ))}
        <div className='flex rounded-lg items-center h-12 w-28 hover:bg-[#5a7385] hover:text-[white] group'>
            <p className='flex items-center justify-center font-bold text-lg w-24 group-hover:scale-115 cursor-pointer mr-2 duration-300 text-white group-hover:text-white'>More <span className='group-hover:ml-2 duration-300'>&rarr;</span></p>
            </div>
        </div>
    </div>
  )
}

export default First