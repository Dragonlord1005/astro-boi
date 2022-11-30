const Links = () => {
  return (
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
  )
}

const Navigation = () => {
  return (
    <nav className="flex w-full color-white justify-between p-6 dark:(bg-gray-800) light:(bg-gray-7)">
      <div className="flex flex-shrink-0">
        <span className="font-bold">Astro Boi</span>
        <span className="i-logos-astro?mask color-white w-2em h-2em" />
      </div>
      <Links />
    </nav>
  );
};

export default Navigation;
