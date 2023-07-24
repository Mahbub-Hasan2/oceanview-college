import React from 'react';

const collegeData = [
    {
        "collegeId": 1,
        "collegeImage": "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=600",
        "collegeName": "Sunshine University",
    },
    {
        "collegeId": 2,
        "collegeImage": "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Evergreen College",
    },
    {
        "collegeId": 3,
        "collegeImage": "https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Harmony University",
    },
    {
        "collegeId": 4,
        "collegeImage": "https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Merrimack College",
    },
    {
        "collegeId": 5,
        "collegeImage": "https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Merrimack College",
    },
    {
        "collegeId": 6,
        "collegeImage": "https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Merrimack College",
    }
    // Add more dummy data as needed
];

const CollegeImageGallery = () => {
    return (
        <div className="college-image-gallery p-4 md:p-8">
            <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">College Image Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {collegeData.map(college => (
                    <div key={college.collegeId} className="college-group-picture-container">
                        <img src={college.collegeImage} alt={college.collegeName} className="college-group-picture w-full h-auto rounded-lg shadow-lg" />
                        <p className="college-name text-lg font-bold mt-2">{college.collegeName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeImageGallery;
