import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";
import OfferCard from "../components/OfferCards";
import OBanner from "../components/OBanner";


const HomePage = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getAllOffers();
  }, []);

  const getAllOffers = async () => {
    try {
      const { data } = await axios.get("/api/v1/offer/get-offer");
      setOffers(data.offers);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  return (
    <Layout>
      <HomeBanner/>
      <Services/>
      <OfferCard offers={offers}/>
      <OBanner/>
    </Layout>
  );
};

export default HomePage;


      
