import React from "react";
import { Carousel } from "@material-tailwind/react";
import products from "../../ProductsObj";
import { useNavigate } from "react-router-dom";

const ProductCrousel = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      <Carousel
        autoplay={true}
        loop={true}
        navigation={() => null} // Disabling default navigation arrows
        transition={{
          type: "tween", // Set transition type
          duration: 0.5, // Set transition duration in seconds
        }}
      >
        {products[0].images.map((item, i) => (
          <img
            key={i}
            src={item}
            alt="product-pic"
            className="w-full h-full object-contain"
            loading="lazy" // Lazy loading images for better performance
          />
        ))}
      </Carousel>

      <div className="flex flex-col items-center gap-2 h-56">
        <p
          onClick={() => navigate("/product")}
          className="cursor-pointer text-center text-md font-medium overflow-hidden hover:underline"
        >
          {products[0].name}
        </p>
        <p className="text-yellow-900 text-xl overflow-hidden">★ ★ ★ ★ ☆</p>
        <p className="text-center text-md font-medium overflow-hidden">
          Rs. {products[0].price}
        </p>
        <div className="flex gap-2 items-center justify-center overflow-hidden">
          {/* Example of product options/icons */}
          <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:border border-black">
            <div className="w-7 h-7 rounded-full bg-blue-gray-500"></div>
          </div>
          <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:border border-black">
            <div className="w-7 h-7 rounded-full bg-red-300"></div>
          </div>
          <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:border border-black">
            <div className="w-7 h-7 rounded-full bg-blue-300"></div>
          </div>
          <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:border border-black">
            <div className="w-7 h-7 rounded-full bg-green-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCrousel;
