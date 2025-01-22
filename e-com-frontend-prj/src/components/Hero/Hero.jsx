import React from "react";
import Slider from "react-slick";

import Img1 from '/src/assets/hero/headphone.png';
import Img2 from './../../assets/category/macbook.png';
import Img3 from './../../assets/category/vr.png';
import Button from "../Button/Button";

const HeroData = [
    {
        id: 1,
        img: Img1,
        subtitle: "Wireless",
        title: "Headset",
        title2: "TT-Beast-z",
    },
    {
        id: 2,
        img: Img2,
        subtitle: "All-in-one",
        title: "Work-Station",
        title2: "TT-book",
    },
    {
        id: 3,
        img: Img3,
        subtitle: "High-End",
        title: "VR",
        title2: "TT-Vision",
    },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
    <div className="container">
    <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
      <Slider {...settings}>
        {
            HeroData.map((data) => (
                <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center items-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold">{data.subtitle}</h1>
                            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold">{data.title}</h1>
                            <h1 className="text-4xl uppercase text-primary  sm:text-4xl md:text-4xl lg:text-6xl font-bold  ">{data.title2}</h1>
                            <div>
                                <Button
                                text="Buy Now"
                                bgColor="bg-primary"
                                textColor="text-white"
                                />
                            </div>
                        </div>
                        <div className="order-1 sm:order-2">
                            <div>
                                <img src={data.img} alt="" 
                                className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-100 lg:scale-105 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.5)] relative z-40" />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </Slider>
      </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
