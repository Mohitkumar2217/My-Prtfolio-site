import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.85)] backdrop-blur-sm transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer hover:text-red-500 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {menuLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-3xl md:text-4xl font-semibold text-white my-4 transform transition-all duration-500 delay-[${index * 100}ms]
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            hover:text-blue-400
          `}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};
