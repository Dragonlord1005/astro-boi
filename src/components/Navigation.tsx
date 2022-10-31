const Navigation = () => {
  return (
    <nav className="flex w-full dark:color-white justify-between p-6 bg-gray-800">
      <div className="flex flex-shrink-0">
        <span className="font-bold">Astro Boi</span>
      </div>
      <div className="links lg:text-center w-full mr-20">
        <a href="/" className="link mr-6">
          Home
        </a>
        {/* TODO: Add a about page */}
        {/* <a href="/about" className="link mr-6">About</a> */}
        <a href="/projects" className="link mr-6">
          Projects
        </a>
        <a href="/blog" className="link">
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
