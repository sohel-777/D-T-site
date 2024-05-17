import { Carousel } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import img1 from "../../assets/alo1.jpg";
import img2 from "../../assets/bam1.jpg";
import img3 from "../../assets/ban1.jpg";
import img4 from "../../assets/pool1.jpg";

const Crousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img1Element = new Image();
    img1Element.src = img1;
    img1Element.onload = () => setImagesLoaded(true);
    const img2Element = new Image();
    img2Element.src = img2;
    img2Element.onload = () => setImagesLoaded(true);
    const img3Element = new Image();
    img3Element.src = img3;
    img3Element.onload = () => setImagesLoaded(true);
    const img4Element = new Image();
    img4Element.src = img4;
    img4Element.onload = () => setImagesLoaded(true);
  }, []);

  return (
    <div className={`w-full ${!imagesLoaded ? "h-0 overflow-hidden" : ""}`}>
      <Carousel
        autoplay={true}
        loop={true}
        transition={{
          type: "tween", // Set transition type
          duration: 0.5, // Set transition duration in seconds
        }}
        prevArrow={({ handlePrev }) => null}
        nextArrow={({ handleNext }) => null}
      >
        <img
          src={img1}
          alt="image 1"
          className="w-full aspect-[4/3] object-cover"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
        <img
          src={img2}
          alt="image 2"
          className="w-full aspect-[4/3] object-cover"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
        <img
          src={img3}
          alt="image 3"
          className="w-full aspect-[4/3] object-cover"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
        <img
          src={img4}
          alt="image 4"
          className="w-full aspect-[4/3] object-cover"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
      </Carousel>
    </div>
  );
};

export default Crousel;
