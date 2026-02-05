import { motion } from "framer-motion";
import { useState } from "react";

interface FeedbackForm {
  name: string;
  email: string;
  rating: number;
  comment: string;
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

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get existing feedbacks from localStorage
      const existingFeedbacks = localStorage.getItem("feedbacks");
      const feedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];

      // Add new feedback with unique ID and timestamp
      const newFeedback = {
        id: `feedback_${Date.now()}`,
        ...formData,
        timestamp: new Date().toISOString(),
      };

      feedbacks.push(newFeedback);

      // Save to localStorage
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

      // Also save to public JSON file for persistence (you can download it later)
      console.log("Feedback saved:", newFeedback);
      console.log(
        "All feedbacks:",
        JSON.stringify(feedbacks, null, 2)
      );

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", rating: 0, comment: "" });
        setSubmitted(false);
      }, 3000);
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
