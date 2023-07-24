import React, { useState } from 'react';

const selectedCollege = {
    collegeId: 1,
    collegeImage: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600",
    collegeName: "Sunshine University",
    collegeRating: 4.5,
    admissionDates: "2023-09-01 to 2023-09-30",
    numberOfResearches: 120,
    events: [
      {
        eventName: "Orientation Day",
        date: "2023-09-15",
        location: "Main Auditorium"
      },
      {
        eventName: "Career Fair",
        date: "2023-10-10",
        location: "Student Center"
      }
    ],
    sports: [
      "Football",
      "Basketball",
      "Swimming"
    ]
  };

const MyCollege = () => {
    const [rating, setRating] = useState(5); // Default rating is set to 5
    const [reviewText, setReviewText] = useState('');
  
    const handleRatingChange = (e) => {
      setRating(parseInt(e.target.value));
    };
  
    const handleReviewChange = (e) => {
      setReviewText(e.target.value);
    };
  
    const handleSubmitReview = (e) => {
      e.preventDefault();
      const newReview = {
        collegeName: selectedCollege.collegeName,
        rating,
        reviewText,
      };
      // You can pass the newReview to the parent component to handle adding the review to the reviews state
      // For example: addReview(newReview);
      setRating(5); // Reset rating to default value after submitting
      setReviewText(''); // Clear the review text after submitting
    };

    return (
        <div className="p-4 md:p-8">
            <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">My College Details</h2>
            {/* Display college details based on the selected college */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${selectedCollege.collegeImage})` }}>
                    {/* Add any overlay content on the college image if needed */}
                </div>
                <div className="p-4">
                    <h3 className="college-name text-xl font-bold mb-2">{selectedCollege.collegeName}</h3>
                    <p className="college-rating">Rating: {selectedCollege.collegeRating}</p>
                    <p className="college-admission-dates">Admission Dates: {selectedCollege.admissionDates}</p>
                    <p className="college-researches">Number of Researches: {selectedCollege.numberOfResearches}</p>
                </div>
            </div>
            {/* Add the review form below */}
            <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">Add a Review</h2>
            <form onSubmit={handleSubmitReview} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Rating:
                    </label>
                    <select
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                        className="form-select block w-full"
                        required
                    >
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Very Good</option>
                        <option value="3">3 - Good</option>
                        <option value="2">2 - Fair</option>
                        <option value="1">1 - Poor</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="reviewText" className="block text-gray-700 font-bold mb-2">
                        Review:
                    </label>
                    <textarea
                        id="reviewText"
                        name="reviewText"
                        value={reviewText}
                        onChange={handleReviewChange}
                        className="form-textarea block w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyCollege;