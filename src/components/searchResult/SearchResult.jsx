import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchBooks } from "../../features/searchBooks/searchSlice";
import axios from "axios";

function SearchResult() {
  const dispatch = useDispatch();
  const { searchItem } = useParams();
  const [page, setpage] = useState(1);
  const [loading,setLoading]= useState(false);
  const[error, setError]= useState("")
  const fetchSearch = async () => {
    const query = searchItem.replace(/\s+/g, "+");
    setLoading(true);
    console.log("laoding results")
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=15`
    );
    dispatch(
      setSearchBooks({
        docs: res.data.docs,
        numFound: res.data.numFound,
      })
    );
    setLoading(false);
    console.log("loading finished")
  };
  
    
  useEffect(() => {
    fetchSearch();
  }, [page, searchItem]);

  const books = useSelector((state)=> state.setSearchBooks.value.docs)

  return (
    <>
      <div className="bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] mt-2">
        <div className="text-white flex flex-col gap-2 h-[85vh] sm:h-[95vh] mx-auto">
          <h1 className="text-3xl p-2 capitalize">
            Results For "{searchItem}" are &rarr;
          </h1>
          <div className="cards custom-scroll flex flex-col sm:flex-row overflow-y-scroll sm:flex-wrap items-center sm:justify-around sm:gap-10 gap-5 mb-1 p-1 shadow-2xl border rounded-lg h-auto w-[95%] mx-auto">
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
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
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
          <button
            disabled={page === 1}
            onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
            className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300 disabled:opacity-50"
          >
            Previous
          </button>

          

          <button
            onClick={() => setpage((prev) => prev + 1)}
            className="text-white p-2 rounded-md border-[#facc15] border-1 cursor-pointer hover:scale-105 duration-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
