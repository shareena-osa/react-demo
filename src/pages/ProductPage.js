import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SareeCollection from "./SareeCollection";

function ProductPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    cssEase: "linear",
  };

  return (
    <div className="bg-gray-100">
      <div className="flex ">
        <div className=" overflow-hidden p-5">
          <h5 className="font-bold text-3xl  p-12 box-decoration-clone bg-gradient-to-r from-indigo-100 to-pink-100 text-center animate-slide-in-left  ">
            New Collections
          </h5>
          <Slider {...settings}>
            {/* Product details as slider items */}
            {[
              "/images/color6.png",
              "/images/color10.jpeg",
              "/images/color19.jpeg",
              "/images/color11.jpeg",
              "/images/color12.jpeg",
              "/images/color13.jpeg",
              "/images/color14.jpeg",
              // ... more images
            ].map((src, index) => (
              <div key={index} className="p-6">
                <div className="box-shadow rounded-lg   m-5">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="h-60 w-30 object-cover mx-auto p-4 border rounded shadow"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="">
        <SareeCollection />;
      </div>
    </div>
  );
}



export default ProductPage;
