// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/CategoryProductStyles.css";
// const CategoryProduct = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     if (params?.slug) getPrductsByCat();
//   }, [params?.slug]);
//   const getPrductsByCat = async () => {
//     try {
//       const { data } = await axios.get(
//         `/api/v1/product/product-category/${params.slug}`
//       );
//       setProducts(data?.products);
//       setCategory(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mt-3">
//         <h4 className="text-center">Category - {category?.name}</h4>
//         <h6 className="text-center">{products?.length} result found </h6>
//         <div className="row">
//           <div className="col-md-9 offset-1">
//             <div className="d-flex flex-wrap">
//               {products?.map((p) => (
//                 <div
//                   className="card m-2"
//                   style={{ width: "18rem" }}
//                   key={p._id}
//                 >
//                   <img
//                     src={`/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{p.name}</h5>
//                     <p className="card-text">
//                       {p.description.substring(0, 30)}...
//                     </p>
//                     <p className="card-text"> $ {p.price}</p>
//                     <button
//                       className="btn btn-primary ms-1"
//                       onClick={() => navigate(`/product/${p.slug}`)}
//                     >
//                       More Details
//                     </button>
//                     <button className="btn btn-secondary ms-1">
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CategoryProduct;


import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center font-semibold text-2xl">
          Category - {category?.name}
        </h4>
        <h6 className="text-center">
          {products?.length} results found{" "}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((p) => (
            <div
              className="bg-white rounded shadow p-4"
              key={p._id}
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="w-full h-68 object-cover mb-4"
                alt={p.name}
              />
              <div>
                <h5 className="text-xl font-semibold mb-2">{p.name}</h5>
                <p className="text-gray-600 mb-4">
                  {p.description.substring(0, 30)}...
                </p>
                <p className="text-lg font-semibold">${p.price}</p>
              </div>
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
