"use client";

import { FaMapMarkedAlt, FaCar, FaBuilding } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  const products = [
    {
      title: "Map Data",
      description: "Location data reflecting the real world.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
    {
      title: "RealView",
      description: "India's very own 360° panoramic street images service.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
    {
      title: "eLoc",
      description: "A doorstep digital address system in just 6 characters.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
    {
      title: "HD Maps",
      description: "High precision 4D maps built to enable autonomous tech.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
    {
      title: "Map Portal",
      description:
        "India's original internet mapping portal. Hyperlocal. Precise. Updated.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
    {
      title: "Metaverse 4D Maps",
      description:
        "Immersive, high fidelity 4D maps reflecting the real-world.",
      image:
        "https://img.freepik.com/free-photo/globe-placed-map_23-2147732577.jpg?t=st=1735017419~exp=1735021019~hmac=f93ce32fe33cd1c7c8a706104da49b7fe34a04659f54577ded4d3404cd228aac&w=826",
    },
  ];

  const companyNames = [
    "Google",
    "Microsoft",
    "Amazon",
    "BMW",
    "Tata Motors",
    "Indian Govt",
    "Uber",
    "Ola",
    "Samsung",
    "Apple",
  ];

  const solutions = [
    {
      icon: <FaBuilding className="w-12 h-12 mx-auto text-[#f4a261]" />,
      title: "Enterprise",
      description:
        "Digitally transforming your enterprise through maps, location technologies, IoT and geo-analytics.",
    },
    {
      icon: <FaCar className="w-12 h-12 mx-auto text-[#f4a261]" />,
      title: "Automotive",
      description:
        "Creating future-ready vehicles with enhanced CX using India's best maps, automotive technologies.",
    },
    {
      icon: <FaMapMarkedAlt className="w-12 h-12 mx-auto text-[#f4a261]" />,
      title: "Government",
      description:
        "Improved governance, citizen engagement and infrastructure at central, state and city levels.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f5f1eb] dark:bg-darkBackground py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-200">
                The Ramayan Maps
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-2">
                  - a journey on canvas
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
                Immerse yourself in a trance by looking at this antique map on
                canvas tracing the journey of Maryada Purushottama, Shri Ram on
                a rarely seen ancient map of India - right from his birth to the
                establishment of Ram Rajya.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#f4a261] dark:bg- hover:bg-[#e76f51] dark:bg-orange-300 dark:hover:bg-orange-500 text-white px-8 py-3 rounded-md transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 hover:border-gray-400 px-8 py-3 dark:text-white  rounded-md transition-colors">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <img
                src="https://img.freepik.com/free-photo/travel-composition-with-slate_23-2147982057.jpg?t=st=1735014911~exp=1735018511~hmac=1b0eb54ef50cd59fe08e88362ee127e5d7daa53a9563daee3cddc1dbd747c08b&w=826"
                alt="Ramayan Map"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white dark:bg-darkBackground dark:text-gray-300 border border-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The names you trust, trust MapmyIndia.
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Serving industry leaders across big tech, corporates, automotive
              and government authorities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {companyNames.map((name, i) => (
              <div
                key={i}
                className="h-12 w-32 flex items-center justify-center bg-gray-200 dark:bg-gray-400 rounded"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-900">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-darkBackground dark:text-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Products</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through India's most comprehensive suite of mapping,
              location and IoT solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 h-full dark:bg-darkCardBackground">
                  <h3 className="text-xl font-semibold mb-2 ">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-300">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#f4a261] hover:text-[#e76f51]"
                  >
                    Learn more <BsArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white dark:bg-darkBackground dark:text-darkTextColor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Solutions</h2>
            <p className="text-gray-600 dark:text-darkTextColor">
              Bespoke end-to-end technology solutions to solve critical industry
              challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center p-6">
                {solution.icon}
                <h3 className="text-xl font-semibold my-4">{solution.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-darkTextColor">
                  {solution.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#f4a261] hover:text-[#e76f51]"
                >
                  Learn more <BsArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
