import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Category() {
    const {categoryId} = useParams();
    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit = 20;
  useEffect(() => {
  async function fetchBooks() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://openlibrary.org/subjects/${categoryId}.json?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();
      setBooks(data.works || []);
    } catch (error) {
      setError("Failed to load books.");
    } finally {
      setLoading(false);
    }
  }

  fetchBooks();
}, [offset, categoryId]);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [offset]);
  return (
    <>
    <div className="bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] mt-2">
      <div className="text-white flex flex-col gap-2 h-[85vh] sm:h-[95vh] mx-auto">
        <h1 className="text-3xl text-white bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] p-2 capitalize">{categoryId} &rarr;</h1>
        <div className="cards custom-scroll flex flex-col sm:flex-row overflow-y-scroll sm:flex-wrap items-center sm:justify-between sm:gap-10 gap-5 mb-1 p-1 shadow-2xl border rounded-lg h-auto w-[95%] mx-auto">
            {loading ? (
              <div className="flex mx-auto justify-center items-center w-[150px] h-[150px]">
                <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." className="w-20 h-20" />
              </div>
            ) : error ? (
              <div className="text-red-400 text-xl">{error}</div>
            ) : (
              books.map((book) => (
          <div key={book.key} className="flex flex-col gap-1 border-[white] justify-between border-[1px] rounded-md w-[300px] sm:w-[320px] p-1 flex-shrink-0 h-[580px] sm:h-[500px] overflow-clip hover:overflow-auto custom-scroll">
            <div className="w-[280px] h-[420px] sm:w-[300px] sm:h-auto flex items-center justify-center bg-white rounded-md overflow-hidden border-[#facc15] border mx-auto hover:scale-105 duration-300 cursor-pointer">
                <img
                  src={
                    book.cover_id
                      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                      : "https://via.placeholder.com/150x200?text=No+Cover"
                  }
                  alt={book.title || "Book cover" || "image not found"}
                  className="w-[100%] h-[100%] border-[#facc15]"
                />
              </div>
            <div className="detail flex flex-col h-[100px] sm:gap-0 mx-1 my-2 overflow-y-auto custom-scroll">
              <h3 className="text-white ml-1 text-lg"><b className='font-extrabold uppercase text-[white]'>Title:</b> <span className='font-medium'>{book.title}</span>
              </h3>
              <p className="text-white ml-1">
                <b className='text-md font-extrabold uppercase text-[white]'>By: </b> <span className='font-medium'>{book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}</span>
              </p>
            </div>
          </div>
        ))  
      )}
        </div>
      </div>
      <div className="buttons flex justify-between p-2 text-2xl mx-auto w-[90%]">
      <button onClick={() => setOffset((prev) => Math.max(prev - limit, 0))} className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300">Previous</button>
      <button onClick={() => setOffset((prev) => prev + limit)} className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300">Next</button>
      </div>
    </div>
    </>
  );
}

export default Category;
