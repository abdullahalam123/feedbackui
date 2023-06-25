import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackList = () => {
  // taking all the value from feedback context
  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <h1>No feeback</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
