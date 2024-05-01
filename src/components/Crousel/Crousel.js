import { Carousel } from "@material-tailwind/react";
import img1 from "../../assets/alo1.jpg";
import img2 from "../../assets/bam1.jpg";
import img3 from "../../assets/ban1.jpg";
import img4 from "../../assets/pool1.jpg";

const Crousel = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{
        type: "tween", // Set transition type
        duration: 0.5, // Set transition duration in seconds
      }}
      prevArrow={({ handlePrev }) => (
        null
     )}
     nextArrow={({ handleNext }) => (
       null
     )}
    >
      <img
        src={img1}
        alt="image 1"
        className="w-full aspect-[4/3] object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="w-full aspect-[4/3] object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="w-full aspect-[4/3] object-cover"
      />
      <img
        src={img4}
        alt="image 4"
        className="w-full aspect-[4/3] object-cover"
      />
    </Carousel>
  );
};

export default Crousel;
