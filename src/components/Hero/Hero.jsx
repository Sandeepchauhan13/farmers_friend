import React from "react";
import appleedit1 from "../../assets/hero/appleedit1.png";
import appleedit2 from "../../assets/hero/appleedit2.png";
import appleedit3 from "../../assets/hero/appleedit3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: appleedit1,
    title: "Upto 200rs/kg fresh apple`s",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: appleedit2,
    title: "Organic Farming",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: appleedit3,
    title: "Delicious & Gala`s",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
     bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 -mt-40 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
       <Slider {...settings}>
        {ImageList.map(( data )=>(


            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title} 
                  </h1>
                  <p className="text-sm">
             {data.description}
                  </p>
                  <div
                    
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                    <div className="relative z-0" >
                        <img src={data.img} alt="altimg" 
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125  lg:scale-120 object-contain mx-auto  opacity-90 "
                        />
                    </div>
                </div>
               
              </div>
            </div>
        ))}
       </Slider>
         
      </div>
    </div>
  );
};

export default Hero;