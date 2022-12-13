import { useState } from "preact/hooks";

const MobileNavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block flex justify-between brand-bg p-3 lg:hidden">
      <div className="flex-grow">
        <div>
          <button
            type="button"
            className=":uno: inline-block text-white h-6 w-6 fill-current focus:outline-none i-material-symbols-menu"
            onClick={toggleMenu}
          ></button>
          {isMenuOpen && (
            <div className="bg-gray-9 shadow-lg rounded-lg p-3">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavMenu;
