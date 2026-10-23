import { useState } from "react";

function Form() {
  const [FormData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    beverage: "",
    clean: "",
    overall: "",
  });

  const handleChange = (e) => {
    setformData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !FormData.name ||
      !FormData.email ||
      !FormData.phone ||
      !FormData.service ||
      !FormData.beverage ||
      !FormData.clean ||
      !FormData.overall
    ) {
      alert("Please fill out all the fields");
      return;
    }

    const existingFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    existingFeedback.push(FormData);

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(existingFeedback)
    );

    alert("Thank you for your Feedback");

    setformData({
      name: "",
      email: "",
      phone: "",
      service: "",
      beverage: "",
      clean: "",
      overall: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Customer Details</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={FormData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Your E-Mail"
        value={FormData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={FormData.phone}
        onChange={handleChange}
      />

      <div className="rating">
        <p>Please rate the quality of the services you received from host</p>
        {["Excellent", "Good", "Fair", "Bad"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="service"
              value={option}
              checked={FormData.service === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="rating">
        <p>Please rate the quality of the beverages you received</p>
        {["Excellent", "Good", "Fair", "Bad"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="beverage"
              value={option}
              checked={FormData.beverage === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="rating">
        <p>Was our restaurant clean?</p>
        {["Excellent", "Good", "Fair", "Bad"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="clean"
              value={option}
              checked={FormData.clean === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="rating">
        <p>Please rate your overall experience</p>
        {["Excellent", "Good", "Fair", "Bad"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="overall"
              value={option}
              checked={FormData.overall === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default Form;
