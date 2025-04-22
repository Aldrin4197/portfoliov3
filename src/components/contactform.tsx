import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import avatar from "../assets/ghib.png"; // Update this path if needed

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all fields");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          message: form.message,
          email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12 px-4">
      {/* Title */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text-4xl font-bold text-primary text-center"
      >
        Get in touch.
      </motion.h2>

      {/* Content Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="avatar pb-4">
            <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="Avatar" />
            </div>
          </div>

          <p className="text-md text-base-content max-w-xs">
            Want to chat? Just shoot me a DM with a direct question on{" "}
            <a
              href="https://www.facebook.com/intspaceinc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold"
            >
              Facebook
            </a>{" "}
            or use this contact form and I'll respond as soon as I can.
          </p>
        </motion.div>

        {/* Right Column (Form) */}
        <form
          onSubmit={sendEmail}
          className="card shadow-lg p-8 bg-base-100 space-y-4 w-full max-w-md mx-auto"
        >

          <div className="form-control">
            <label className="label">
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="textarea textarea-bordered h-32"
              placeholder="Message"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <div
              className={`alert ${
                status.includes("✅") ? "alert-success" : "alert-error"
              } mt-4`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
