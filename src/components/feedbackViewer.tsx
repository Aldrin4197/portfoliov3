import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Feedback {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  timestamp: string;
}

function FeedbackViewer() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [showViewer, setShowViewer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    loadFeedbacks();
  }, [showViewer]);

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

  // Calculate average rating
  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const totalStars = feedbacks.reduce((sum, fb) => sum + fb.rating, 0);
    return (totalStars / feedbacks.length).toFixed(1);
  };

  const averageRating = calculateAverageRating();
  
  // Round to nearest 0.5 for half-star display
  const roundedRating = Math.round(parseFloat(String(averageRating)) * 2) / 2;

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Pagination logic
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeedbacks = feedbacks.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowViewer(!showViewer)}
          className="btn btn-outline btn-sm"
        >
          {showViewer ? "Hide" : "Show"} Reviews ({feedbacks.length})
        </button>
        
        {feedbacks.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="rating rating-sm rating-half">
              <input type="radio" name="average-rating" className="rating-hidden" />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-1 bg-orange-400"
                checked={roundedRating === 0.5}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-2 bg-orange-400"
                checked={roundedRating === 1}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-1 bg-orange-400"
                checked={roundedRating === 1.5}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-2 bg-orange-400"
                checked={roundedRating === 2}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-1 bg-orange-400"
                checked={roundedRating === 2.5}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-2 bg-orange-400"
                checked={roundedRating === 3}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-1 bg-orange-400"
                checked={roundedRating === 3.5}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-2 bg-orange-400"
                checked={roundedRating === 4}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-1 bg-orange-400"
                checked={roundedRating === 4.5}
                disabled
                readOnly
              />
              <input
                type="radio"
                name="average-rating"
                className="mask mask-star-2 mask-half-2 bg-orange-400"
                checked={roundedRating === 5}
                disabled
                readOnly
              />
            </div>
            <span className="text-sm font-semibold">{averageRating} / 5</span>
          </div>
        )}
      </div>

      {showViewer && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4"
        >
          {feedbacks.length === 0 ? (
            <div className="alert alert-info">
              <span>No feedbacks yet. Be the first to share your thoughts!</span>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {currentFeedbacks.map((feedback) => (
                  <motion.div
                    key={feedback.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card bg-base-200"
                  >
                    <div className="card-body p-4">
                      <div className="flex gap-4 items-start">
                        {/* Avatar Placeholder */}
                        <div className="avatar avatar-placeholder">
                          <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>{getInitials(feedback.name)}</span>
                          </div>
                        </div>

                        {/* Feedback Content */}
                        <div className="flex-1">
                          <div>
                            <h3 className="font-semibold">{feedback.name}</h3>
                          </div>

                          <div className="flex items-center gap-2 my-2">
                            <div className="rating rating-sm gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                  key={star}
                                  type="radio"
                                  name={`rating-${feedback.id}`}
                                  className="mask mask-star-2 bg-orange-400"
                                  checked={star === feedback.rating}
                                  disabled
                                  readOnly
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">
                              {feedback.rating}/5
                            </span>
                          </div>

                          {feedback.comment && (
                            <p className="text-sm italic">"{feedback.comment}"</p>
                          )}

                          <div className="text-xs text-base-content/50 mt-2">
                            {formatDate(feedback.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <div className="join">
                    <button
                      className="join-item btn btn-sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      «
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        className={`join-item btn btn-sm ${
                          currentPage === page ? "btn-active" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      className="join-item btn btn-sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      »
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default FeedbackViewer;
