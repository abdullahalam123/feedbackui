import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

// our context will store all the global state for our application
export const FeedbackProvider = ({ children }) => {
  // state to check if the item needs to be edited
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 4,
      text: "This is from our Feedback Context 1",
    },
    {
      id: 2,
      rating: 3,
      text: "This is from our Feedback Context 2",
    },
    {
      id: 3,
      rating: 5,
      text: "This is from our Feedback Context 3",
    },
  ]);

  const addFeedback = (feedbackData) => {
    feedbackData.id = uuidv4();
    setFeedback([feedbackData, ...feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, newUpdatedItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...newUpdatedItem } : item;
      })
    );
  };

  return (
    // feedback will be the global state that we will pass
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {/* this are the children that need access to our context */}
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
