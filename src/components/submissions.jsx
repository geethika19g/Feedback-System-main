import { useState, useEffect } from "react";

function Submissions() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks =
      JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div className="submissions">
      <h3>Customers Feedbacks</h3>

      {feedbacks.length === 0 ? (
        <p>No Feedbacks Yet</p>
      ) : (
        feedbacks.map((item, index) => (
          <div key={index} className="feedback-card">
            <p><b>Name:</b> {item.name}</p>
            <p><b>E-mail:</b> {item.email}</p>
            <p><b>Phone:</b> {item.phone}</p>
            <p><b>Service:</b> {item.service}</p>
            <p><b>Beverage:</b> {item.beverage}</p>
            <p><b>Cleanliness:</b> {item.clean}</p>
            <p><b>Overall:</b> {item.overall}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Submissions;
