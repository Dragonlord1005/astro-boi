const Links = () => {
  return (
    <div className=":uno: links text-center w-full mr-20">
      <a href="/" className="nav-link mr-6">
        Home
      </a>
      <a href="/about" className="nav-link mr-6">
        About
      </a>
      <a href="/projects" className="nav-link mr-6">
        Projects
      </a>
      <a href="/blog" className="nav-link">
        Blog
      </a>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="lg:visible hidden lg:(flex w-full color-white justify-between p-6 brand-bg)">
      <div className="flex flex-shrink-0">
        <span className="font-bold">Astro Boi</span>
        <span className=":uno: i-logos-astro?mask color-white w-2em h-2em" />
      </div>
      <Links />
    </nav>
  );
};

export default Navigation;
