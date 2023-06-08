import React, { useState } from "react";
import { FaCheck, FaTimes, FaEnvelope } from "react-icons/fa";

const ManageClasses = () => {
  // Dummy data for demonstration
  const classes = [
    {
      id: 1,
      image: "class1.jpg",
      className: "Class 1",
      instructorName: "John Doe",
      instructorEmail: "john.doe@example.com",
      availableSeats: 5,
      price: 10,
      status: "pending",
    },
    {
      id: 2,
      image: "class2.jpg",
      className: "Class 2",
      instructorName: "Jane Smith",
      instructorEmail: "jane.smith@example.com",
      availableSeats: 10,
      price: 15,
      status: "approved",
    },
    // Add more classes as needed
  ];

  // State to manage feedback form visibility
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Function to handle sending feedback
  const sendFeedback = (classId) => {
    // Implement your logic to send feedback
    // You can access the classId and feedback from the form inputs
    setShowFeedbackForm(false);
    // Reset the form or perform any necessary actions
  };

  return (
    <div>
      <h2>Manage Classes</h2>
      {classes.map((classItem) => (
        <div key={classItem.id} className="class-item">
          <img src={classItem.image} alt={classItem.className} />
          <div className="class-info">
            <h3>{classItem.className}</h3>
            <p>
              <strong>Instructor:</strong> {classItem.instructorName}
            </p>
            <p>
              <strong>Email:</strong> {classItem.instructorEmail}
            </p>
            <p>
              <strong>Available Seats:</strong> {classItem.availableSeats}
            </p>
            <p>
              <strong>Price:</strong> ${classItem.price}
            </p>
            <p>
              <strong>Status:</strong> {classItem.status}
            </p>
          </div>
          <div className="class-actions">
            {classItem.status === "pending" && (
              <>
                <button className="approve-button">
                  <FaCheck /> Approve
                </button>
                <button className="deny-button">
                  <FaTimes /> Deny
                </button>
              </>
            )}
            <button
              className="feedback-button"
              onClick={() => setShowFeedbackForm(true)}
            >
              <FaEnvelope /> Send Feedback
            </button>
          </div>
        </div>
      ))}
      {showFeedbackForm && (
        <div className="feedback-form">
          <h3>Send Feedback</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="feedback">Feedback:</label>
              <textarea id="feedback" name="feedback" rows="4" required />
            </div>
            <button type="submit" onClick={() => sendFeedback(1)}>
              Send
            </button>
            <button type="button" onClick={() => setShowFeedbackForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
