import React, { useState } from "react";

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Here you can implement the logic to submit the feedback.
    // For this example, we'll just clear the feedback content.
    setFeedback("");
  };

  const footerStyle = {
    backgroundColor: "white",
    color: "blue",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    maxWidth: "100px",
    height: "auto",
  };

  const sectionStyle = {
    flex: "1",
    margin: "10px",
    maxWidth: "300px",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid blue",
    borderRadius: "5px",
    resize: "vertical",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={logoStyle}>
        {/* Replace 'logo.png' with the actual path to your restaurant logo */}
        <img src="images/1.png" height="100px" alt="Restaurant Logo" />
      </div>
      <div style={sectionStyle}>
        <h3>About us</h3>
        <p>Tantalize your taste buds with our exquisite dishes.</p>
        <p>Experience culinary delight like never before.</p>
      </div>
      <div style={sectionStyle}>
        <h3>Feedback</h3>
        <textarea
          style={textareaStyle}
          rows="4"
          placeholder="Tell us what you think..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button style={buttonStyle} onClick={handleSubmitFeedback}>
          Submit
        </button>
      </div>
    </footer>
  );
};

export default Footer;
