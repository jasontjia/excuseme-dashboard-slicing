const Topbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white rounded-2xl">
      {/* Logo kiri */}
      <div className="flex items-center space-x-2">
        <img
          src="/Logo.png"
          alt="Excuseme Logo"
          className="h-10 object-contain"
        />
      </div>

      {/* Menu kanan */}
      <nav className="flex items-center space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600 transition-colors">
          home
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          support
        </a>

        {/* My Account + Icon Jam */}
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:text-blue-600 transition-colors pr-8 mr-8">
            my account
          </a>
          <img
            src="/jam_menu.png"
            alt="Clock Icon"
            className="w-6 h-6 object-contain"
          />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
