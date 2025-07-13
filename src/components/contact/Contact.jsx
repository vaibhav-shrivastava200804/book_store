import React from 'react';
import "../../index.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="flex text-white justify-center items-center mt-5">
        <div className="flex p-2 rounded-lg items-center border sm:border-0 w-[90%] sm:w-[85%]">
          <div className="flex flex-col gap-5 overflow-y-auto h-[80vh] sm:h-auto custom-scroll">
            <div className="main flex flex-col gap-2">
              <h1 className='text-[#facc15] text-xl sm:text-2xl'>Contact Us - VBookZ</h1>
              <p className='sm:text-lg text-justify pl-5'>
                At <strong>VBookZ</strong>, we love hearing from fellow book enthusiasts! Whether you have a question, feedback, or a suggestion, we're here to listen and help.
              </p>
            </div>

            <div className="contactDetails flex flex-col gap-2 break-all">
              <h1 className='text-[#facc15] text-xl sm:text-2xl'>How to Reach Us</h1>
              <ul className="list-disc pl-10 flex flex-col gap-3 text-lg">
                <li><strong>Email:</strong> support@vbookz.com</li>
                <li><strong>Phone:</strong> +91-9876543210</li>
                <li><strong>Address:</strong> VBookZ Headquarters, Book Street, Knowledge City, India - 123456</li>
              </ul>
            </div>

            <div className="businessHours flex flex-col gap-2">
              <h1 className='text-[#facc15] text-xl sm:text-2xl'>Business Hours</h1>
              <ul className="list-disc pl-10 flex flex-col gap-3 text-lg">
                <li>Monday to Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 10:00 AM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="feedback flex flex-col gap-2">
              <h1 className='text-[#facc15] text-xl sm:text-2xl'>Feedback & Suggestions</h1>
              <p className='sm:text-lg text-justify pl-5'>
                Your feedback helps us improve and serve you better! Feel free to share your thoughts on our collection, website, or any new features you'd like to see.
              </p>
            </div>

            <div className="socials flex flex-col gap-2">
              <h1 className='text-[#facc15] text-xl sm:text-2xl'>Stay Connected</h1>
              <ul className="list-disc pl-10 flex flex-col gap-3 text-lg">
                <li className="flex items-center gap-2">
                  <FaFacebook /> Facebook: @VBookZ
                </li>
                <li className="flex items-center gap-2">
                  <FaTwitter /> Twitter: @VBookZ
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram /> Instagram: @VBookZ
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin /> LinkedIn: @VBookZ
                </li>
              </ul>
            </div>

            <div className="thanks flex flex-col gap-2">
              <p className='sm:text-lg text-justify pl-5'>
                Thank you for choosing <strong>VBookZ</strong>. <br /> Happy Reading! 📚
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
