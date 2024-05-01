import React, { useState } from "react";
import products from "../ProductsObj";
import { Carousel } from "@material-tailwind/react";
import { VscLocation } from "react-icons/vsc";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [selectedColor, setSelectedColor] = useState("grey");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleAddToCart = () => {
    const updatedProduct = {
      ...products[0],
      color: selectedColor,
      quantity: selectedQuantity,
    };

    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the updated product to the existing cart items array
    existingCartItems.push(updatedProduct);

    // Stringify the updated array and save it to local storage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    alert("product added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3  w-screen overflow-x-hidden p-4">
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Carousel
          autoplay={true}
          loop={true}
          navigation={() => null}
          transition={{
            type: "tween", // Set transition type
            duration: 0.5, // Set transition duration in seconds
          }}
        >
          {products[0].images.map((item, i) => {
            return (
              <img
                key={i}
                src={item}
                alt="product-pic"
                className="w-full h-full object-contain"
              />
            );
          })}
        </Carousel>

        <div className="flex flex-col items-start gap-1 w-full">
          <p className=" text-lg font-medium overflow-hidden hover:underline">
            {products[0].name}
          </p>
          <p className=" text-md font-medium overflow-hidden">
            Rs. {products[0].price}
          </p>
          <p className="text-black text-lg overflow-hidden">★ ★ ★ ★ ☆ (57)</p>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full p-2 bg-gray-300">
          <p className="text-center text-wrap py-3 font-semibold text-xl">
            What's Special?
          </p>
          <hr className="border-black" />
          <p className="text-center text-wrap py-3 font-light text-sm">
            Super light, World's first Banna yarn towel.
          </p>
          <hr className="border-black" />
          <p className="text-center text-wrap py-3 font-light text-sm">
            Inherent antibacterial properties, keeping you extra safe.
          </p>
          <hr className="border-black" />
          <p className="text-center text-wrap py-3 font-light text-sm">
            Dual Sided with labels, prevents germ transfer.
          </p>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* select color */}
        <div>
          <p className="text-center text-2xl">
            Pick your favourite <strong>color</strong>{" "}
          </p>
          <div className="flex gap-2 items-center justify-center overflow-hidden ">
            <div
              onClick={() => handleColorChange("gray")}
              class="w-9 h-9 cursor-pointer rounded-full bg-white flex justify-center items-center hover:border border-black"
            >
              <div class="w-7 h-7 rounded-full bg-blue-gray-300"></div>
            </div>

            <div
              onClick={() => handleColorChange("red")}
              class="w-9 h-9 cursor-pointer rounded-full bg-white flex justify-center items-center hover:border border-black"
            >
              <div class="w-7 h-7 rounded-full bg-red-300"></div>
            </div>

            <div
              onClick={() => handleColorChange("blue")}
              class="w-9 h-9 cursor-pointer rounded-full bg-white flex justify-center items-center hover:border border-black"
            >
              <div class="w-7 h-7 rounded-full bg-blue-300"></div>
            </div>

            <div
              onClick={() => handleColorChange("green")}
              class="w-9 h-9 cursor-pointer rounded-full bg-white flex justify-center items-center hover:border border-black"
            >
              <div class="w-7 h-7 rounded-full bg-green-300"></div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* select quantity */}
        <div className="flex flex-col justify-center items-center gap-3 w-screen overflow-hidden">
          <p className="text-2xl ">
            More quantity = <strong>More value</strong>
          </p>
          <button
            onClick={() => handleQuantityChange(1)}
            className="border-2 border-black px-8 py-1 hover:text-white hover:bg-green-600 hover:border-green-600"
          >
            Just 1
          </button>

          <div className="flex justify-center gap-2 items-center">
            <button
              onClick={() => handleQuantityChange(2)}
              className="border-2 border-black px-4 py-1 hover:text-white hover:bg-green-600 hover:border-green-600"
            >
              2 for 2,499
            </button>
            <button
              onClick={() => handleQuantityChange(3)}
              className="border-2 border-black px-4 py-1 hover:text-white hover:bg-green-600 hover:border-green-600"
            >
              3 for 3,999
            </button>
            <button
              onClick={() => handleQuantityChange(4)}
              className="border-2 border-black px-4 py-1 hover:text-white hover:bg-green-600 hover:border-green-600"
            >
              4 for 4,599
            </button>
          </div>

          <p className="text-2xl ">
            Do you want to gift <strong>safety?</strong>
          </p>
          <div className="flex justify-center gap-3 items-center">
            <button className="border-2 border-black px-3 py-1 hover:text-white hover:bg-green-600 hover:border-green-600">
              Check Gifting options
            </button>
            <button className="border-2 border-black px-5 py-1 hover:text-white hover:bg-green-600 hover:border-green-600">
              Nope, it's self love
            </button>
          </div>

          <p className="text-2xl ">
            Make it yours. <strong>Personalize?</strong>
          </p>
          <div className="flex justify-center gap-3 items-center">
            <button className="border-2 border-black px-16 py-1 hover:text-white hover:bg-green-600 hover:border-green-600">
              Nope.
            </button>
            <button className="border-2 border-black px-8 py-1 hover:text-white hover:bg-green-600 hover:border-green-600">
              Yes ofcourse.
            </button>
          </div>

          <div className="border-2 border-black w-screen py-8 text-center">
            <p className="font-semibold text-2xl ">Just 120 gsm.</p>
            <p className=" text-2xl ">As Light as a feather</p>
          </div>

          <div className="flex justify-center gap-3 items-center">
            <button
              onClick={handleAddToCart}
              className=" text-xs border-2 border-black px-14 py-1 hover:text-white hover:bg-green-600 hover:border-green-600"
            >
              ADD TO CART
            </button>
            <button className="text-xs border-2 border-black px-2 py-1 hover:text-white hover:bg-green-600 hover:border-green-600">
              BUY IT WITH WITH POINTS.
            </button>
          </div>

          <div className="w-full p-2 bg-gray-300 flex flex-col items-center">
            <div>
              <div className="flex items-center">
                <VscLocation />
                <p className="font-bold"> Deliver to</p>
              </div>
              <div className="flex items-center">
                <input
                  className="bg-transparent border-b-2 border-black"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Pincode"
                />
                <p className="font-bold">check</p>
              </div>
            </div>
          </div>

          <div className="w-full p-2 bg-cyan-200 text-center font-light">
            EXTRA 5% OFF ON PREPAID ORDERS
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex justify-center  items-center">
          <button className="text-xs border border-black px-4 py-1 hover:text-white hover:bg-black  ">
            Product description
          </button>
          <button className="text-xs border border-black px-7 py-1 hover:text-white hover:bg-black  ">
            Features
          </button>
          <button className="text-xs border border-black px-8 py-1 hover:text-white hover:bg-black  ">
            Reviews
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-bold">DETAILS</p>
          <p className="text-customDimText font-light text-center">
            {products[0].details}
          </p>
          <p className="font-bold">Material :</p>
          <p className="text-customDimText font-light text-center">
            60% Banana viscose , 40% Cotton
          </p>
          <p className="font-bold">Size :</p>
          <p className="text-customDimText font-light text-center">
            75 cm X 150 cm
          </p>
          <p className="font-bold">Just 150 gsm.</p>
          <p className="text-customDimText font-light text-center">
            As light as a feather
          </p>
          <p className="font-bold">Where it’s made?</p>
          <p className="text-customDimText font-light text-center">
            India.{" "}
            <a className="underline" href="">
              Learn more
            </a>{" "}
            about our operations
          </p>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <Footer />
    </>
  );
};

export default Product;
