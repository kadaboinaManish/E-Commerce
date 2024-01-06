

import offerModel from "../models/offerModel.js";
import fs from 'fs';

// Controller function to create a new offer
export const createOfferController = async (req, res) => {
  try {
    const {name, description, discountedPrice, category} = req.fields;
    const {photo} = req.files;
    //validation
    switch(true){
      case !name:
        return res.status(500).json({ success: false, message: "Name is Required" });
      case !description:
        return res.status(500).json({ success: false, message: "Description is Required" });
      case !discountedPrice:
        return res.status(500).json({ success: false, message: "Discounted Price is Required" });
      case !category:
        return res.status(500).json({ success: false, message: "Category is Required" });
      case photo && photo.size > 100000000:
        return res
        .status(500).send({
          success: false,
          message: "photo is Required and should be less then 1mb",
        })
    }
    const offers = new offerModel({...req.fields});
    if(photo){
      offers.photo.data = fs.readFileSync(photo.path);
      offers.photo.contentType = photo.type;
    }
    await offers.save();
    res.status(201).json({ success: true, message: "Offer Created Successfully", offers }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error 1",error });
  }
};

// Controller function to get all offers
export const getOffersController = async (req, res) => {
  try {
    const offers = await offerModel.find({})
    .populate("category").select("-photo").limit(12);
    res.status(200).json({ success: true, offers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error 2" });
  }
};

// get photo
export const offerPhotoController = async (req, res) => {
  try {
    console.log("Requested Params: req.params")
    const offers = await offerModel.findById(req.params._id).select("photo");
    console.log("offer photo data",offers.photo.data)
    if (offers.photo.data) {
      res.set("Content-type", offers.photo.contentType);
      return res.status(200).send(offers.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};
