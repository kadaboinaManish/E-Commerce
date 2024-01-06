// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { useAuth } from "../../context/auth";
// import toast from "react-hot-toast";
// import SearchInput from "../Form/SearchInput";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
// import { Badge } from "antd";

// const Header = () => {
//   const [auth, setAuth] = useAuth();
//   const [cart] = useCart();
//   const categories = useCategory();
//   const handleLogout = () => {
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//     toast.success("Logout Successfully");
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

//             <Link to="/" className="navbar-brand ">
//               🛒 Ecommerce App
//             </Link>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to={"/categories"}
//                   data-bs-toggle="dropdown"
//                 >
//                   All
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to={"/categories"}>
//                       All Categories
//                     </Link>
//                   </li>
//                   {categories?.map((c) => (
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to={`/category/${c.slug}`}
//                       >
//                         {c.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <SearchInput />
//               <li className="nav-item">
//                 <NavLink to="/all-products" className="nav-link ">
//                   All Products
//                 </NavLink>
//               </li>
//               {!auth?.user ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink to="/register" className="nav-link">
//                       Register
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="nav-item dropdown">
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{ border: "none" }}
//                     >
//                       {auth?.user?.name}
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <NavLink
//                           to={`/dashboard/${
//                             auth?.user?.role === 1 ? "admin" : "user"
//                           }`}
//                           className="dropdown-item"
//                         >
//                           Dashboard
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           onClick={handleLogout}
//                           to="/login"
//                           className="dropdown-item"
//                         >
//                           Logout
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                 </>
//               )}
//               <li className="nav-item">
//                 <Badge count={cart?.length} showZero>
//                   <NavLink to="/cart" className="nav-link">
//                     Cart
//                   </NavLink>
//                 </Badge>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="container mx-auto flex items-center justify-between">
          <button
            className="text-white lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>

          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } lg:flex lg:flex-grow lg:items-center lg:justify-between`}
          >
            <Link to="/" className="text-white text-2xl font-bold">
              🛒 Ecommerce App
            </Link>
            <ul className="flex items-center space-x-4 lg:space-x-8">
              <li className="relative group">
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                >
                  Categories
                </button>
                {isCategoriesOpen && (
                  <ul className="absolute left-0 mt-2 bg-gray-800 text-white rounded shadow-md z-10">
                    <li>
                      <Link to="/categories" className="block px-4 py-2">
                        All Categories
                      </Link>
                    </li>
                    {categories?.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/category/${c.slug}`}
                          className="block px-4 py-2"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <SearchInput />
              <li>
                <NavLink
                  to="/all-products"
                  className="text-white hover:text-gray-300"
                >
                  All Products
                </NavLink>
              </li>
              {!auth?.user ? (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      className="text-white hover:text-gray-300"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="text-white hover:text-gray-300"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative group">
                    <button
                      className="text-white hover:text-gray-300 focus:outline-none"
                      onClick={() => setIsAdminOpen(!isAdminOpen)}
                    >
                      {auth?.user?.name}
                    </button>
                    {isAdminOpen && (
                      <ul className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-md z-10">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="block px-4 py-2"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="block px-4 py-2"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              )}
              <li>
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="text-white hover:text-gray-300">
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;









