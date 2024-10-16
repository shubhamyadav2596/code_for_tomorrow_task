import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!feedback) newErrors.feedback = "Feedback is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setName("");
        setEmail("");
        setFeedback("");
        setSubmitted(false);
      }, 2000); // Reset form after 2 seconds
    }
  };

  return (
   <>
   <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
   <h2 className="text-xl font-bold mb-4">
     We are listening! Share your feedback
   </h2>
   <form onSubmit={handleSubmit}>
     {/* Name Input */}
     <div className="mb-4">
       <label className="block text-gray-700">Name</label>
       <input
         type="text"
         className={`w-full p-2 border ${
           errors.name ? "border-red-500" : "border-gray-300"
         } rounded`}
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Enter your name"
       />
       {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
     </div>

     {/* Email Input */}
     <div className="mb-4">
       <label className="block text-gray-700">Email</label>
       <input
         type="email"
         className={`w-full p-2 border ${
           errors.email ? "border-red-500" : "border-gray-300"
         } rounded`}
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Enter your email"
       />
       {errors.email && (
         <p className="text-red-500 text-sm">{errors.email}</p>
       )}
     </div>

     {/* Feedback Input */}
     <div className="mb-4">
       <label className="block text-gray-700">Feedback</label>
       <textarea
         className={`w-full p-2 border ${
           errors.feedback ? "border-red-500" : "border-gray-300"
         } rounded`}
         value={feedback}
         onChange={(e) => setFeedback(e.target.value)}
         placeholder="Enter your feedback"
       />
       {errors.feedback && (
         <p className="text-red-500 text-sm">{errors.feedback}</p>
       )}
     </div>

     {/* Submit Button */}
     <button
       type="submit"
       className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
     >
       Submit
     </button>

     {/* Thank You Message */}
     {submitted && (
       <p className="text-green-500 text-center mt-4">
         Thank you for your feedback!
       </p>
     )}
   </form>
 </div>

  <div className="text-center mt-5" >
     <Link className="bg-blue-600 px-4 py-2 rounded shadow text-white" to="/"> Back</Link>
  </div>
   </>
  );
};

export default FeedbackForm;
