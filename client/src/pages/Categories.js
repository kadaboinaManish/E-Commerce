
import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import { FaChevronRight } from "react-icons/fa";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container mt-4">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12">
            <ul className="list-group">
              {categories.map((c) => (
                <li
                  key={c._id}
                  className="list-group-item flex justify-between items-center"
                >
                  <div className="text-lg font-semibold">{c.name}</div>
                  <Link
                    to={`/category/${c.slug}`}
                    className="btn btn-dark ml-2 flex items-center"
                  >
                    Explore <FaChevronRight className="ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

