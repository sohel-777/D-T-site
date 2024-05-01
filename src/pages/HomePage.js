import React from "react";
import Crousel from "../components/Crousel/Crousel.js";
import img1 from "../assets/customIcon1.png";
import img2 from "../assets/customIcon2.png";
import img3 from "../assets/customIcon3.png";
import img4 from "../assets/customIcon4.png";
import Footer from "../components/Footer/Footer";
import ProductCrousel from "../components/Crousel/ProductCrousel.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Crousel />
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="p-9 flex flex-col items-center text-center  w-screen">
        <h1 className="font-bold text-7xl overflow-hidden mb-2">
          Begin with the basics.
        </h1>
        <p className="font-semibold text-2xl text-customDimText overflow-hidden">
          <strong className="!text-black">Join the 1,56,768+ users</strong> and
          recognise the towel as the first step in skincare.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          <img className="cursor-pointer " src={img1} alt="" onClick={() => navigate("/all-products")}/>
          <img className="cursor-pointer " src={img2} alt="" onClick={() => navigate("/all-products")}/>
          <img className="cursor-pointer " src={img4} alt="" onClick={() => navigate("/all-products")}/>
          <img className="cursor-pointer " src={img3} alt="" onClick={() => navigate("/all-products")}/>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="px-5 flex flex-col items-center gap-4">
        <p className="text-center text-3xl font-bold">Most Loved</p>

      
          <ProductCrousel />
         
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className=" py-2 px-12 flex flex-col items-center text-center  w-screen">
        <h1 className="font-bold text-7xl overflow-hidden mb-2">
          Don't settle.
        </h1>
        <p className="font-semibold text-2xl text-customDimText overflow-hidden">
          Ever thought your Towel could be a skin-care
          <strong className="!text-black"> game changer? Ours is.</strong>
        </p>
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="p-8  flex flex-col items-center text-center gap-4  w-screen bg-customDimText">
        <h1 className="font-bold text-7xl overflow-hidden mb-2">Last Year</h1>
        <div className="flex justify-evenly items-start  gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0376/8529/7196/files/Awards02.jpg?v=1706684753"
              alt=""
            />
            <p className="text-wrap font-bold text-lg">Most Preferred Brand</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0376/8529/7196/files/award-img2.jpg?v=1706594667"
              alt=""
            />
            <p className="text-wrap font-bold text-lg">
              Emerging Start Up Of The Year
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0376/8529/7196/files/Awards01.jpg?v=1706684013"
              alt=""
            />
            <p className="text-wrap font-bold text-lg">Product Innovation</p>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Footer />
    </div>
  );
};

export default HomePage;
