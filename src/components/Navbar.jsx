import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white tracking-wide"
          >
            Mohit<span className="text-red-500">.tech</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden z-50 flex flex-col gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                menuOpen && "rotate-45 translate-y-2"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${
                menuOpen && "opacity-0"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                menuOpen && "-rotate-45 -translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
