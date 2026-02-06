import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import avatar from "../assets/ghib.png";

interface FeedbackForm {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

interface Feedback {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  timestamp: string;
}

function Feedback() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    loadFeedbacks();
  }, [submitted]);

  const loadFeedbacks = async () => {
    try {
      const response = await fetch('/api/get-feedbacks.php');
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      }
    } catch (error) {
      console.error('Error loading feedbacks:', error);
      // Fallback to localStorage if PHP endpoint fails
      const storedFeedbacks = localStorage.getItem("feedbacks");
      if (storedFeedbacks) {
        setFeedbacks(JSON.parse(storedFeedbacks));
      }
    }
  };

  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const totalStars = feedbacks.reduce((sum, fb) => sum + fb.rating, 0);
    return (totalStars / feedbacks.length).toFixed(1);
  };

  const averageRating = calculateAverageRating();
  const roundedRating = Math.round(parseFloat(String(averageRating)) * 2) / 2;

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare new feedback
      const newFeedback = {
        id: `feedback_${Date.now()}`,
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Save to PHP backend
      const response = await fetch('/api/save-feedback.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      });

      if (response.ok) {
        console.log("Feedback saved to file:", newFeedback);
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", rating: 0, comment: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to save feedback');
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Avatar and Rating Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary text-center"
        >
          Rate Me.
        </motion.h2>

        <div className="flex items-center gap-6">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="avatar"
          >
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="Aldrin's Avatar" />
            </div>
          </motion.div>

          {/* Rating Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left"
          >
            {feedbacks.length > 0 ? (
              <div className="flex flex-col gap-2 items-start">
                <div className="flex items-center gap-2">
                  <div className="rating rating-md rating-half">
                    <input type="radio" name="header-rating" className="rating-hidden" />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-1 bg-orange-400"
                      checked={roundedRating === 0.5}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-2 bg-orange-400"
                      checked={roundedRating === 1}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-1 bg-orange-400"
                      checked={roundedRating === 1.5}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-2 bg-orange-400"
                      checked={roundedRating === 2}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-1 bg-orange-400"
                      checked={roundedRating === 2.5}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-2 bg-orange-400"
                      checked={roundedRating === 3}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-1 bg-orange-400"
                      checked={roundedRating === 3.5}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-2 bg-orange-400"
                      checked={roundedRating === 4}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-1 bg-orange-400"
                      checked={roundedRating === 4.5}
                      disabled
                      readOnly
                    />
                    <input
                      type="radio"
                      name="header-rating"
                      className="mask mask-star-2 mask-half-2 bg-orange-400"
                      checked={roundedRating === 5}
                      disabled
                      readOnly
                    />
                  </div>
                  <span className="text-lg font-bold">{averageRating}</span>
                </div>
                <p className="text-sm text-base-content/70 text-left">
                  Based on {feedbacks.length} {feedbacks.length === 1 ? 'review' : 'reviews'}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2 items-start">
                <p className="text-md text-base-content">
                  Want to chat? Just shoot me a DM with a direct question on{" "}
                  <a href="https://facebook.com">
                    <span className="text-secondary font-bold">Facebook </span>
                  </a>
                  and I'll respond as soon as I can.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Feedback Form Card */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">
            Share Your Feedback
          </h2>
          <p className="text-base-content/70 mb-6">
            Your feedback helps me improve. Rate your experience and let me know
            your thoughts!
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="alert alert-success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Thank you for your feedback!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Star Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="flex items-center gap-3 mt-2">
                  <div className="rating rating-lg gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 cursor-pointer"
                        aria-label={`${star} star${star > 1 ? "s" : ""}`}
                        checked={formData.rating === star}
                        onChange={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        required
                      />
                    ))}
                  </div>
                  {(hoveredRating > 0 || formData.rating > 0) && (
                    <span className="text-sm text-base-content/70">
                      {hoveredRating > 0
                        ? `${hoveredRating} star${hoveredRating > 1 ? "s" : ""}`
                        : `${formData.rating} star${formData.rating > 1 ? "s" : ""}`}
                    </span>
                  )}
                </div>
              </div>

              {/* Comment Textarea */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Comments <span className="text-base-content/50">(optional)</span>
                  </span>
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts..."
                  className="textarea textarea-bordered h-24 w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end mt-6">
                <button
                  type="submit"
                  className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting || formData.rating === 0}
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Submit Feedback"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Feedback;
