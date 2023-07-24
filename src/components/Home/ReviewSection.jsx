import React from 'react';

const reviews = [
    {
        collegeName: "Sunshine University",
        title: "Great Learning Experience",
        profession: "Software Engineer",
        author: "John Doe",
        content: "Sunshine University has excellent faculty and a friendly campus environment. I had a great learning experience here!",
        reviewImage: "https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        collegeName: "Evergreen College",
        title: "Highly Recommended Research Support",
        profession: "Researcher",
        author: "Jane Smith",
        content: "Evergreen College provided me with the best resources and support to pursue my research interests. Highly recommended!",
        reviewImage: "https://images.pexels.com/photos/8052809/pexels-photo-8052809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        collegeName: "Harmony University",
        title: "Top-notch Music Programs",
        profession: "Musician",
        author: "Michael Brown",
        content: "Harmony University's music programs are top-notch. I am grateful for the opportunities I had here.",
        reviewImage: "https://images.pexels.com/photos/3778673/pexels-photo-3778673.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // No image for this review
    },
    // Add more college reviews as needed
];


const ReviewSection = ({ collegeName }) => {
    return (
        <div className="review-section p-4 md:p-8">
            <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">{`Reviews for ${collegeName}`}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review, index) => (
                    <div key={index} className="review-item p-6 bg-white rounded-lg shadow-md">
                        {review.reviewImage && (
                            <img src={review.reviewImage} alt={`Review by ${review.author}`} className="review-image w-full h-auto mb-4 rounded-lg" />
                        )}
                        <h3 className="review-title text-xl font-bold text-gray-900 mb-2">{review.title}</h3>
                        <p className="review-profession text-gray-600 mb-2">{review.profession}</p>
                        <p className="review-content text-gray-800 mb-4">{review.content}</p>
                        <p className="review-author text-gray-600">{`- ${review.author}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
