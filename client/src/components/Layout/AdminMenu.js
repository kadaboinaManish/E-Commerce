// import React from "react";
// import { NavLink } from "react-router-dom";
// const AdminMenu = () => {
//   return (
//     <>
//       <div className="text-center">
//         <div className="list-group">
//           <h4>Admin Panel</h4>
//           <NavLink
//             to="/dashboard/admin/create-category"
//             className="list-group-item list-group-item-action"
//           >
//             Create Category
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/create-product"
//             className="list-group-item list-group-item-action"
//           >
//             Create Product
//           </NavLink>
//           <NavLink 
//             to="/dashboard/admin/create-offer" 
//             className="list-group-item list-group-item-action">
//             Create Offers
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/products"
//             className="list-group-item list-group-item-action"
//           >
//             Products
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/users"
//             className="list-group-item list-group-item-action"
//           >
//             Users
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/get-offer"
//             className="list-group-item list-group-item-action"
//           >
//             Offers
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminMenu;

import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="space-y-2">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-offer"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Create Offers
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/get-offer"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-300"
          >
            Offers
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
