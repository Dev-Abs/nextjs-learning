// footer component for my music website

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // with use of grid , 4 cols in large screen, 2 cols in medium and 1 in small screens, 1st col about us , 2nd col quick links, 3rd col follow us, 4th col contact us

    <footer className="bg-black text-white">
      <div className="container mx-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-4 text-wrap text-slate-300">
              We are a team of musicians and music enthusiasts who are
              passionate about music and want to spread the joy of music to
              everyone.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>
                <Link href="/courses" className="hover:text-teal-300 text-slate-300">Courses</Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-teal-300 text-slate-300">Instructors</Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-teal-300 text-slate-300">Webinars</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 text-slate-300">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="mt-4 flex flex-col">
              <Link href='/' className="hover:text-teal-300 text-slate-300">Facebook</Link>
              <Link href='/' className="hover:text-teal-300 text-slate-300">Instagram</Link>
              <Link href='/' className="hover:text-teal-300 text-slate-300">Twitter</Link>
              <Link href='/' className="hover:text-teal-300 text-slate-300">LinkedIn</Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="mt-4">
              <li className="text-slate-300">Phone: 123-456-7890</li>
              <li className="text-slate-300">Email: name@gmail.com </li>
              <li className="text-slate-300">Address: 1234 Street Name, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
