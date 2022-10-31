// React navbar component
// We are using tailwind for styling
// The site is called Astro-Boi
// The links are /, /projects, and /blog

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Astro-Boi</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center font-bold">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="link mr-4"
          >
            Home
          </a>
          <a
            href="/projects"
            className="link mr-4"
          >
            Projects
          </a>
          <a
            href="/blog"
            className="link"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
