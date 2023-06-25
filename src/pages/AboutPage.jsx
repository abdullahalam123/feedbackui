import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a React app that allows users to leave feedback</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default AboutPage;
