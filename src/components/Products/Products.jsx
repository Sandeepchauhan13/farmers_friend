import React from 'react'
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import prod1 from "../../assets/products/prod1.jpeg";
import product4 from "../../assets/products/product4.png";
import Hapka from "../../assets/products/Hapka.jpeg";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
    {
      id: 1,
      img: product1,
      title: "Dark Baron Gala",
      rating: 5.0,
      color: "DarkRed",
      aosDelay: "0",
    },
    {
      id: 2,
      img: product2,
      title: "Scarllett2",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: prod1,
      title: "Adam  Spur",
      rating: 4.7,
      color: "green",
      aosDelay: "400",
    },
    {
      id: 4,
      img: product4,
      title: "Red Velox",
      rating: 4.4,
      color: "Red",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Hapka,
      title: "repeat",
      rating: 4.5,
      color: "Pinkred",
      aosDelay: "800",
    },
  ];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
    <div className="container">
      {/* Header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      {/* Body section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products

