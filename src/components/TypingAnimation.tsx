import { useState, useEffect } from "react";

interface TypingAnimationProps {
  steps: string[];
  loop?: boolean;
  delay?: number;
  deleteSpeed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  steps,
  loop = true,
  delay = 100,
  deleteSpeed = 50,
}) => {
  const [text, setText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < steps[stepIndex].length) {
      // Typing
      typingTimeout = setTimeout(() => {
        setText((prev) => prev + steps[stepIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      typingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (!isDeleting && charIndex === steps[stepIndex].length) {
      // Pause after typing
      typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next step after deleting
      setIsDeleting(false);
      setStepIndex((prev) =>
        loop ? (prev + 1) % steps.length : Math.min(prev + 1, steps.length - 1)
      );
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, stepIndex, steps, loop, delay, deleteSpeed]);

  return (
    <span className="text-base-content">
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
