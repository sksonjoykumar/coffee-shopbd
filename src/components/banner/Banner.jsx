import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/images/banner-1.jpg";
import ban1 from "../../assets/images/ban-1.jpg";
import ban2 from "../../assets/images/ban-2.jpg";
import ban3 from "../../assets/images/ban-3.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="px-4 md:px-20 mt-5">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={ban2}
            alt="slider img"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="ban-description hidden sm:block absolute bottom-20 md:bottom-24 lg:bottom-44  xl:bottom-44 right-24 md:right-32 lg:right-60 xl:right-72">
            <Link to={"products"}>
              <button
                type="button"
                className="py-2 px-2 w-[150px] text-white text-xl rounded-md bg-[#563B2A] hover:bg-[#75513a] transition-all duration-200"
              >
                Buy Coffee
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={ban1}
            alt="slider img"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="ban-description hidden sm:block absolute bottom-20 md:bottom-24 lg:bottom-44  xl:bottom-44 right-24 md:right-32 lg:right-60 xl:right-72">
            <Link to={"products"}>
              <button
                type="button"
                className="py-2 px-2 w-[150px] text-white text-xl rounded-md bg-[#563B2A] hover:bg-[#75513a] transition-all duration-200"
              >
                Buy Coffee
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={ban3}
            alt="slider img"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="ban-description"></div>
        </div>
        <div className="w-full h-auto lg:h-[70vh] relative">
          <img
            src={banner1}
            alt="slider img"
            className="w-full h-full rounded-md object-cover relative border"
          />
          <div className="ban-description"></div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
