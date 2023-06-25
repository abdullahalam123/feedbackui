import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";
import RatingSelect from "../RatingSelect/RatingSelect";
import { useContext, useEffect } from "react";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackForm = () => {
  // state for the text typed in
  const [text, setText] = useState("");

  // conditional check for button
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // state for the rating
  const [rating, setRating] = useState(0);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // logic to handle button disabled/enabled
  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
      setDisabled(true);
    } else if (text !== "" && text.trim("").length <= 10) {
      setMessage("It must be atleast 10 characters long");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }

    setText(e.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setDisabled(false);
    }
  }, [feedbackEdit]);

  // handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      // if updated then update
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us</h2>
        <RatingSelect
          setCurrentRating={(currentRating) => setRating(currentRating)}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={disabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
