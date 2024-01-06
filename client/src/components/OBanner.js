import React from 'react';
import B4 from '../assets/images/banner/b4.jpg';
import B7 from '../assets/images/banner/b7.jpg';

const OBanner = () => {
  return (
    <section className="flex mb-4 gap-4">
      <div className="relative flex-1">
        <img src={B4} alt="Image 1" className="w-full h-64 object-cover" />
        <div className="absolute inset-y-0 left-0 flex items-center justify-center bg-opacity-75 p-4">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold">New Winter Collection</h3>
            <p>Get up to 50% off</p>
            <button className="bg-[#2D220E] hover:bg-[#969187] text-white py-2 px-4 mt-2">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <img src={B7} alt="Image 2" className="w-full h-64 object-cover" />
        <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-opacity-10 p-4">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold">Latest Jewelry Collection</h3>
            <p>Get up to 40% off</p>
            <button className="bg-[#D4AF37] hover:bg-[#ddbf5f] text-white py-2 px-4 mt-2">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OBanner;
