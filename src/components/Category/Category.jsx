import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Category() {
    const {categoryId} = useParams();
    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 20;
  useEffect(() => {
    async function fetchThrillerBooks() {
      try {
        const res = await fetch(
          `https://openlibrary.org/subjects/${categoryId}.json?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();
        console.log(data);
        setBooks(data.works || []);
      } catch (error) {
        console.error("Failed to fetch Thriller books:", error);
      }
    }

    fetchThrillerBooks();
  }, [offset,categoryId]);
  return (
    <>
    <div className="bg-gradient-to-tr from-[#650D1B] via-[#DE0D30] to-[#632228] mt-2">
      <div className="text-white flex flex-col gap-2 h-[80vh] sm:h-auto">
        <h1 className="text-3xl text-white bg-gradient-to-tr from-[#650D1B] via-[#DE0D30] to-[#632228] p-2 capitalize">{categoryId} &rarr;</h1>
        <div className="cards custom-scroll flex-1 flex flex-col sm:flex-row items-center overflow-x-auto gap-5 mb-1 p-1 shadow-2xl h-auto">
            {books.map((book) => (
          <div key={book.key} className="flex flex-col gap-1 border-[white] border-[1px] rounded-md w-[240px] sm:w-[150px] p-1 flex-shrink-0 h-[400px] sm:h-[300px] overflow-clip hover:overflow-auto custom-scroll">
            <img
              src={
                book.cover_id
                  ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                  : "https://via.placeholder.com/150x200?text=No+Cover"
              }
              alt={book.title}
              className="mb-2 w-[200px] h-[300px] sm:w-[150px] sm:h-[200px] border border-[#facc15] mt-1 mx-auto rounded-md cursor-pointer hover:scale-105 duration-200"
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
        </div>
      </div>
      <div className="buttons flex justify-between p-2 text-2xl">
      <button onClick={() => setOffset((prev) => Math.max(prev - limit, 0))} className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300">Previous</button>
      <button onClick={() => setOffset((prev) => prev + limit)} className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300">Next</button>
      </div>
    </div>
    </>
  );
}

export default Category;
