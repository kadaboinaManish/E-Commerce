// import React from "react";
// import { Link } from "react-router-dom";
// import Layout from "./../components/Layout/Layout";

// const Pagenotfound = () => {
//   return (
//     <Layout title={"go back- page not found"}>
//       <div className="pnf">
//         <h1 className="pnf-title">404</h1>
//         <h2 className="pnf-heading">Oops ! Page Not Found</h2>
//         <Link to="/" className="pnf-btn">
//           Go Back
//         </Link>
//       </div>
//     </Layout>
//   );
// };

// export default Pagenotfound;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Go back - Page not found"}>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
