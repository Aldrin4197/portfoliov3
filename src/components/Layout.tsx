import { Outlet, useLocation } from "react-router-dom";
import Toggle from "./mode-toggle";
import { motion } from "framer-motion";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full h-full cursor-default">
      {/* Top Right Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Download CV Button */}
        <motion.a
          href="/assets/drin.dlr_CV.pdf"
          download="Aldrin_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm transition-all duration-300 hover:bg-secondary hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>

        {/* Dark/Light Mode Toggle */}
        <Toggle />
      </div>

      {/* Main Content */}
      <div className={`w-full ${isHomePage ? 'max-w-3xl' : 'max-w-5xl'} justify-center mx-auto flex flex-col gap-8`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
