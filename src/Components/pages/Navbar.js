import React, { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { alignRight } from "react-icons-kit/feather/alignRight";
import { close } from "react-icons-kit/ionicons/close";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      if (!isScrolling) {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isScrolling]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Reset isScrolling after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <div className="w-full mx-auto">
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center fixed w-full z-50 border-b px-8"
      >
        <div className="nav-left">
          <button
            onClick={() => scrollToSection('home')}
            className="name font-bold cursor-pointer relative"
          >
            Murad.dev
          </button>
        </div>
        <div className="nav-right md:block hidden">
          <ul className="flex list-none gap-2">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className={`font-bold rounded cursor-pointer transition-all duration-300 ${
                  activeSection === item.to ? 'active' : ''
                }`}
              >
                <li>{item.name}</li>
              </button>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden block transition-colors rounded-lg p-2 hover:text-white hover:bg-slate-800 cursor-pointer"
        >
          <Icon icon={alignRight} size={25} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="navbar fixed top-0 right-0 flex justify-center items-center h-screen w-full z-50"
          >
            <button
              onClick={() => setOpen(false)}
              className="p-1 transition-colors absolute hover:text-red-500 top-5 right-5 z-50"
            >
              <Icon icon={close} size={30} />
            </button>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              className="w-full"
            >
              <ul className="list-none w-full text-white">
                {navItems.map((item) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      scrollToSection(item.to);
                      setOpen(false);
                    }}
                    className="w-full"
                  >
                    <li className="font-bold text-center text-2xl cursor-pointer hover:bg-slate-900 py-4">
                      {item.name}
                    </li>
                  </button>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
