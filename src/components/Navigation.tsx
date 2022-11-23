const Navigation = () => {
  return (
    <nav className="flex w-full color-white dark:(bg-gray-800) light:(bg-gray-7) justify-between p-6">
      <div className="flex flex-shrink-0">
        <span className="color-white font-bold">Astro Boi</span>
        <span className="i-logos-astro?mask text-white w-2em h-2em" />
      </div>
      <div className=":uno: links lg:text-center w-full mr-20">
        <a href="/" className="link mr-6">
          Home
        </a>
        <a href="/about" className="link mr-6">
          About
        </a>
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
