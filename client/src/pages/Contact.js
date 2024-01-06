// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// const Contact = () => {
//   return (
//     <Layout title={"Contact us"}>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/contactus.jpeg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
//           <p className="text-justify mt-2">
//             any query and info about prodduct feel free to call anytime we 24X7
//             vaialible
//           </p>
//           <p className="mt-3">
//             <BiMailSend /> : www.help@ecommerceapp.com
//           </p>
//           <p className="mt-3">
//             <BiPhoneCall /> : 012-3456789
//           </p>
//           <p className="mt-3">
//             <BiSupport /> : 1800-0000-0000 (toll free)
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Contact;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="flex items-center justify-center">
        <div className="md:flex md:space-x-8 p-8 bg-white shadow-md rounded-md">
          <div className="md:w-1/2">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
            <p className="text-justify mb-4">
              Any queries or information about products? Feel free to call
              anytime. We are available 24/7.
            </p>
            <div className="mb-4">
              <p className="flex items-center">
                <BiMailSend className="mr-2" />
                <span>www.help@ecommerceapp.com</span>
              </p>
              <p className="flex items-center">
                <BiPhoneCall className="mr-2" />
                <span>012-3456789</span>
              </p>
              <p className="flex items-center">
                <BiSupport className="mr-2" />
                <span>1800-0000-0000 (toll-free)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
