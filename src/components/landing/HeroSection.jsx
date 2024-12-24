const HeroSection = () => {
  return (
    <section className="relative h-[500px]">
      <img
        src="https://i.pinimg.com/736x/f9/ac/f0/f9acf0ff2150f35aa184e20d79be9061.jpg"
        alt="Traffic Highway"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            MapmyIndia Traffic
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Know your road traffic condition in real time using MapmyIndia's
            widespread and accurate traffic information
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
