// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { useCart } from "../context/cart";
// import { useAuth } from "../context/auth";
// import { useNavigate } from "react-router-dom";
// import "../styles/CartStyles.css";
// const CartPage = () => {
//   const [auth, setAuth] = useAuth();
//   const [cart, setCart] = useCart();
//   const navigate = useNavigate();

//   //total price
//   const totalPrice = () => {
//     try {
//       let total = 0;
//       cart?.map((item) => {
//         total = total + item.price;
//       });
//       return total.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   //detele item
//   const removeCartItem = (pid) => {
//     try {
//       let myCart = [...cart];
//       let index = myCart.findIndex((item) => item._id === pid);
//       myCart.splice(index, 1);
//       setCart(myCart);
//       localStorage.setItem("cart", JSON.stringify(myCart));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="text-center bg-light p-2 mb-1">
//               {`Hello ${auth?.token && auth?.user?.name}`}
//             </h1>
//             <h4 className="text-center">
//               {cart?.length
//                 ? `You Have ${cart.length} items in your cart ${
//                     auth?.token ? "" : "please login to checkout"
//                   }`
//                 : " Your Cart Is Empty"}
//             </h4>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-8">
//             {cart?.map((p) => (
//               <div className="row mb-2 p-3 card flex-row">
//                 <div className="col-md-4">
//                   <img
//                     src={`/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                     width="100px"
//                     height={"100px"}
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <p>{p.name}</p>
//                   <p>{p.description.substring(0, 30)}</p>
//                   <p>Price : {p.price}</p>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeCartItem(p._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="col-md-4 text-center">
//             <h2>Cart Summary</h2>
//             <p>Total | Checkout | Payment</p>
//             <hr />
//             <h4>Total : {totalPrice()} </h4>
//             {auth?.user?.address ? (
//               <>
//                 <div className="mb-3">
//                   <h4>Current Address</h4>
//                   <h5>{auth?.user?.address}</h5>
//                   <button
//                     className="btn btn-outline-warning"
//                     onClick={() => navigate("/dashboard/user/profile")}
//                   >
//                     Update Address
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="mb-3">
//                 {auth?.token ? (
//                   <button
//                     className="btn btn-outline-warning"
//                     onClick={() => navigate("/dashboard/user/profile")}
//                   >
//                     Update Address
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-outline-warning"
//                     onClick={() =>
//                       navigate("/login", {
//                         state: "/cart",
//                       })
//                     }
//                   >
//                     Plase Login to checkout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // Total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <div className="text-2xl font-semibold mb-4">
          {`Hello ${auth?.token && auth?.user?.name}`}
        </div>
        <div className="text-lg mb-4">
          {cart?.length
            ? `You have ${cart.length} items in your cart. ${
                auth?.token ? "" : "Please login to checkout."
              }`
            : "Your cart is empty."}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-8/12 p-4">
            {cart?.map((p) => (
              <div
                key={p._id}
                className="flex mb-4 p-4 bg-white border rounded-md"
              >
                <div className="w-1/4">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="w-full h-auto"
                    alt={p.name}
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between ml-4">
                  <div>
                    <p className="font-semibold text-lg">{p.name}</p>
                    <p className="text-gray-600 mb-2">
                      {p.description.substring(0, 30)}
                    </p>
                    <p className="text-lg">Price: {p.price}</p>
                  </div>
                  <div>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-4/12 ml-auto text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr className="my-4" />
              <h4 className="text-lg">Total: {totalPrice()}</h4>
            </div>
            {auth?.user?.address ? (
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Current Address</h4>
                <h5>{auth?.user?.address}</h5>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            ) : (
              <div className="mb-4">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to Checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
