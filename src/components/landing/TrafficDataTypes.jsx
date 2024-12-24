import { TbDeviceGamepad } from "react-icons/tb";

const TrafficDataTypes = () => {
  const data = [
    {
      bg: "bg-yellow-100",
      title: "Traffic Event Data",
      description: "Announcement of live events...",
    },
    {
      bg: "bg-blue-900 text-white",
      title: "Live Traffic Flow Data",
      description: "Real-time distribution...",
    },
    {
      bg: "bg-teal-500 text-white",
      title: "Traffic Analytics",
      description: "Processing and analyzing...",
    },
    {
      bg: "bg-cyan-100",
      title: "Floating Data",
      description: "Traffic movement through...",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-full p-8 text-center aspect-square flex flex-col items-center justify-center`}
            >
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficDataTypes;
