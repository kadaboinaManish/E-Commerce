import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  // Function to get all offers
  const getAllOffers = async () => {
    try {
      const { data } = await axios.get("/api/v1/offer/get-offer");
      setOffers(data.offers);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllOffers();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Offers List</h1>
          <div className="d-flex flex-wrap">
            {offers?.map((offer) => (
              <Link
                key={offer._id}
                to={`/dashboard/admin/offer/${offer.slug}`}
                className="offer-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/offer/offer-photo/${offer._id}`}
                    className="card-img-top"
                    alt={offer.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{offer.name}</h5>
                    <p className="card-text">{offer.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
