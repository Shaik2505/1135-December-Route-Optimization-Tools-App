import React from "react";

const ProductCard = ({ imgSrc, title, details }) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {details.map((detail, index) => (
          <li key={index}>• {detail}</li>
        ))}
      </ul>
    </div>
  );
};

const ProductsSection = () => {
  // Static Data for the Products Section
  const products = [
    {
      imgSrc: "https://images.unsplash.com/photo-1504244648668-89000185ea9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Real Time Live Traffic",
      details: [
        "Display live traffic of any geographic area with search.",
        "Live traffic feeds available via APIs.",
        "Supports various industry applications like TMC & ITS.",
        "Available to automotive OEs and Open LR feeds for connected experience.",
      ],
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1504244648668-89000185ea9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Historical Traffic Data",
      details: [
        "Modeled from archived traffic data and GPS probes.",
        "Includes historically derived average speed patterns.",
        "Georeferenced to MapmyIndia's core database.",
        "Used for analytics and traffic predictions by public authorities.",
      ],
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1504244648668-89000185ea9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Predictive Traffic",
      details: [
        "Predictive traffic is based on time series analysis of historic data.",
        "Helps in planning journeys in advance.",
        "Enables traffic light management for smoother operations.",
      ],
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1504244648668-89000185ea9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Traffic Analytics",
      details: [
        "Supports planning agencies and controlling commissions.",
        "Color-coded traffic provides visual status of traffic patterns.",
        "Identifies where, when, and why traffic jams occur.",
        "Traffic APIs capture and analyze data effectively.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#1a2b4b] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <p className="mb-12">
          Transforming big data into meaningful traffic information, developing
          high-quality traffic services to help authorities, businesses, and
          consumers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
