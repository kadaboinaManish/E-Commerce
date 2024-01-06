// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; Manish</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-center text-lg font-bold">
        All Right Reserved &copy; Manish
      </h1>
      <p className="text-center mt-3">
        <Link to="/about" className="text-blue-400 hover:underline">
          About
        </Link>
        ||
        <Link to="/contact" className="text-blue-400 hover:underline">
          Contact
        </Link>
        ||
        <Link to="/policy" className="text-blue-400 hover:underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
