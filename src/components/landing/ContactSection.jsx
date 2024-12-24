import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#1a2b4b] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full p-3 rounded bg-[#2a3b5b] border border-gray-600"
              />
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full p-3 rounded bg-[#2a3b5b] border border-gray-600"
              />
              <input
                type="tel"
                placeholder="Phone No*"
                className="w-full p-3 rounded bg-[#2a3b5b] border border-gray-600"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full p-3 rounded bg-[#2a3b5b] border border-gray-600"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded bg-[#2a3b5b] border border-gray-600"
              ></textarea>
              <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
                Send Message »
              </button>
            </form>
          </div>
          {/* Office Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Head Office</h2>
            <div className="space-y-4">
              <p className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Name of the Company: C.E. Info Systems Ltd.</span>
              </p>
              <p className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Ground Floor/First Floor, 237, Okhla Industrial Estate, Phase
                  III New Delhi - 110020
                </span>
              </p>
              <p className="flex items-center space-x-3">
                <FaPhone />
                <span>Customer Support: +91-9999-333-223</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaEnvelope />
                <span>Email ID: contact@mapmyindia.com</span>
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
              <FaFacebook className="text-xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
