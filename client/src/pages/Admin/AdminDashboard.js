// import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";
// import { useAuth } from "../../context/auth";
// const AdminDashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//               <h3> Name : {auth?.user?.name}</h3>
//               <h3>  Email : {auth?.user?.email}</h3>
//               <h3> Admin Contact : {auth?.user?.phone}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminDashboard;

import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container mx-auto my-3 p-3">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded p-4">
              <h3 className="text-2xl font-bold mb-4">Admin Information</h3>
              <div className="mb-4">
                <span className="text-lg font-semibold">Name:</span>{" "}
                {auth?.user?.name}
              </div>
              <div className="mb-4">
                <span className="text-lg font-semibold">Email:</span>{" "}
                {auth?.user?.email}
              </div>
              <div className="mb-4">
                <span className="text-lg font-semibold">Admin Contact:</span>{" "}
                {auth?.user?.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
