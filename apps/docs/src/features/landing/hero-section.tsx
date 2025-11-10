import logo from "./logo.png";

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 py-28 md:px-0">
      <img alt="Picosecond logo" height={75} src={logo} width={75} />

      <span className="mt-16 flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm">
        <i className="fi fi-sr-check-circle" />
        Coming soon
      </span>

      <h2 className="mt-10 text-center font-medium text-4xl tracking-tight md:text-6xl">
        Beautifully crafted ui blocks
        <br className="hidden sm:block" /> for building websites
      </h2>
      <p className="mt-10 w-10/12 text-center text-foreground/60 text-text-pretty md:text-balance md:text-lg">
        A set of beautifully designed components that you can customize, extend,
        and build on. Start here then make it your own. Open Source. Open Code.
      </p>

      <a
        className="hover:-translate-y-2 mt-16 flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground text-sm transition-all duration-300"
        href="https://github.com/weecraft/oneday"
        rel="noopener"
        target="_blank"
      >
        Check our github
      </a>
    </section>
  );
}
