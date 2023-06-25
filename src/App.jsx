import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "./components/AboutLink/AboutLink";
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header headerText="Feedback App" />

        <div className="container">
          <Routes>
            {/* home route */}
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            {/* about route */}
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>

          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
