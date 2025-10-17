const Topbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-4 px-6 sm:px-8 bg-white rounded-2xl shadow-sm">
      {/* Logo */}
      <div className="flex items-center mb-3 sm:mb-0">
        <img
          src="/Logo.png"
          alt="Excuseme Logo"
          className="h-8 sm:h-10 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-700 font-medium text-sm sm:text-base">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Support
        </a>

        {/* My Account dan Icon Jam */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors pr-4 sm:pr-6"
          >
            My Account
          </a>
          <img
            src="/jam_menu.png"
            alt="Clock Icon"
            className="w-5 h-5 sm:w-6 sm:h-6 translate-x-2 sm:translate-x-4 object-contain"
          />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
