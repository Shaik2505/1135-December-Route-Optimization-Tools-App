const Footer = () => {
  return (
    <footer className="py-4 bg-[#152238] text-white/70 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <p>© Copyright 2024. CE Info Systems Ltd All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Report Vulnerability
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
