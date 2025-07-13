import React from 'react'
import "../../index.css"
function About() {
  return (
    <>
        <div className="flex text-white justify-center items-center mt-5 mb-10 bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]">
            <div className="flex items-center border w-[90%] sm:w-[85%] p-2 sm:border-0 rounded-lg">
                <div className="flex flex-col gap-5 overflow-y-auto h-[80vh] sm:h-auto custom-scroll">
                    <div className="main flex flex-col gap-2">
                        <h1 className='text-[#facc15] text-xl sm:text-2xl'>Welcome to VBookZ – Your Online Book Haven!</h1>
                        <p className='sm:text-lg text-justify pl-5'>At VBookZ, we believe books have the power to inspire, educate, and entertain. That's why we've created a platform where book lovers can explore a vast world of literature, organized thoughtfully by category. Whether you're passionate about Science, enchanted by Fantasy, or seeking growth through Self-Help, VBookZ helps you find the right book, right when you need it.</p>
                    </div>
                    <div className="whatoffer flex flex-col gap-2 break-all">
                        <h1 className='text-[#facc15] text-xl sm:text-2xl'>What We Offer</h1>
                        <ul class="list-disc pl-10 flex flex-col gap-5 text-lg">
                            <li><strong>Curated Categories:</strong> Easily browse through a wide range of categories like Art, History, Technology, Travel, and many more.</li>
                            <li><strong>User-Friendly Search:</strong> Quickly find books that match your interests or current reading mood.</li>
                            <li><strong>Discover New Reads:</strong> Explore trending books and timeless classics across genres.</li>
                            <li><strong>Seamless Navigation:</strong> Clean, modern interface that makes discovering books enjoyable.</li>
                        </ul>

                    </div>
                    <div className="mission flex flex-col gap-2">
                        <h1 className='text-[#facc15] text-xl sm:text-2xl'>Our Mission</h1>
                        <p className='sm:text-lg text-justify pl-5'>
                            Our mission at VBookZ is simple: <br />
                            Make books more accessible, more discoverable, and more enjoyable for everyone. <br />
                            We aim to connect readers with stories and knowledge that enrich their lives — one category, one book at a time.
                        </p>
                    </div>
                    <div className="whyChoose flex flex-col gap-2">
                        <h1 className='text-[#facc15] text-xl sm:text-2xl'>Why Choose VBookZ?</h1>
                        <ul className="list-disc pl-10 flex flex-col gap-5 text-lg">
                            <li><strong>Organized by Passion:</strong> Our category-wise structure makes it easy for readers to dive deep into their areas of interest.</li>
                            <li><strong>Dedicated to Readers:</strong> Whether you're a casual reader or a dedicated bibliophile, VBookZ offers something for everyone.</li>
                            <li><strong>Growing Collection:</strong> We are constantly expanding our selection to bring you more options across diverse genres.</li>
                        </ul>
                    </div>
                    <div className="community flex flex-col gap-2">
                        <h1 className='text-[#facc15] text-xl sm:text-2xl'>Join Our Reading Community</h1>
                        <p className='sm:text-lg text-justify pl-5'>
                            Books are more than pages — they are connections. At VBookZ, you're not just finding books; you're becoming part of a community of readers who share your love for learning, imagination, and storytelling.
                        </p>
                        <p className='sm:text-lg text-justify pl-5'>
                            Thank you for choosing VBookZ. <br />
                            Happy Reading! 📚
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About