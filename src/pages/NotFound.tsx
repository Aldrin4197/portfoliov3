import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="card bg-base-100 shadow-2xl max-w-2xl mx-auto">
          <div className="card-body items-center text-center py-12">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="avatar placeholder">
                <div className="bg-error text-error-content rounded-full w-24">
                  <FaExclamationTriangle className="text-5xl" />
                </div>
              </div>
            </motion.div>

            {/* 404 Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-9xl font-bold text-primary mb-4"
            >
              404
            </motion.h1>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Page Not Found</h2>
              <p className="text-lg">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
              <p className="text-base-content/70">
                Don't worry, even the best developers get lost sometimes.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-actions justify-center mt-8 gap-4"
            >
              <Link to="/" className="btn btn-primary gap-2">
                <FaHome />
                Go Home
              </Link>
              <Link to="/#projects" className="btn btn-outline btn-primary">
                View Projects
              </Link>
            </motion.div>

            {/* Divider */}
            <div className="divider mt-8"></div>

            {/* Additional Help */}
            <div className="alert alert-info shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>
                  If you believe this is an error, please{" "}
                  <Link to="/#contact" className="link link-hover font-bold">
                    contact me
                  </Link>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
