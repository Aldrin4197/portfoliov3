import { useParams, Link, Navigate } from "react-router-dom";
import { projectData } from "../data/projectData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaClock, FaUser } from "react-icons/fa";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectData.find((p) => p.slug === slug);

  // If project not found, redirect to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="py-8 px-4">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li>
            <Link to="/" className="link link-hover">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#projects" className="link link-hover">
              Projects
            </Link>
          </li>
          <li>{project.title}</li>
        </ul>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/#projects" className="btn btn-ghost btn-sm gap-2 mb-6">
          <FaArrowLeft />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
          <div className="badge badge-lg badge-info">{project.status}</div>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 text-sm mb-6">
          {project.duration && (
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>{project.duration}</span>
            </div>
          )}
          {project.role && (
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span>{project.role}</span>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <div key={index} className="badge badge-outline badge-primary badge-lg">
              {tech}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.visitLink && project.visitLink !== "#" && (
            <a
              href={project.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gap-2"
            >
              <FaExternalLinkAlt />
              Visit Live Site
            </a>
          )}
          {project.githubLink && project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral gap-2"
            >
              <FaGithub />
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="carousel carousel-center w-full rounded-box shadow-xl bg-base-200 p-4 space-x-4">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
              <img
                src={screenshot}
                alt={`${project.title} - Screenshot ${index + 1}`}
                className="w-full rounded-box"
              />
              {/* Navigation Buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? project.screenshots.length - 1 : index - 1}`}
                  className="btn btn-circle btn-sm"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === project.screenshots.length - 1 ? 0 : index + 1}`}
                  className="btn btn-circle btn-sm"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Indicators */}
        {project.screenshots.length > 1 && (
          <div className="flex justify-center w-full py-4 gap-2">
            {project.screenshots.map((_, index) => (
              <a
                key={index}
                href={`#slide${index}`}
                className="btn btn-xs btn-circle"
              >
                {index + 1}
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary">Overview</h2>
              <p className="text-justify leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="badge badge-primary badge-sm mt-1">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary">Technical Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="badge badge-warning badge-sm mt-1">{index + 1}</div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-6">
          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary">Outcomes & Impact</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="badge badge-success badge-sm mt-1">✓</div>
                      <span className="text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Project Info Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl text-primary">Project Info</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold mb-1">Status</div>
                  <div className="badge badge-info">{project.status}</div>
                </div>
                {project.duration && (
                  <div>
                    <div className="text-sm font-semibold mb-1">Duration</div>
                    <div>{project.duration}</div>
                  </div>
                )}
                {project.role && (
                  <div>
                    <div className="text-sm font-semibold mb-1">Role</div>
                    <div>{project.role}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold mb-1">Technologies</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <div key={index} className="badge badge-sm badge-outline">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl text-primary">Links</h2>
              <div className="space-y-2">
                {project.visitLink && project.visitLink !== "#" && (
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary w-full gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Site
                  </a>
                )}
                {project.githubLink && project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-neutral w-full gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Projects Button at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link to="/#projects" className="btn btn-primary gap-2">
          <FaArrowLeft />
          Back to All Projects
        </Link>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
