import React from 'react';

const CollegeList = ({colleges}) => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">Colleges</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {colleges.map((college) => (
                    <li key={college.collegeId} className="college-card bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <h3 className="college-name text-xl font-bold mb-2">{college.collegeName}</h3>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            onClick={() => {
                                // Logic to handle when a college name is clicked and show the admission form
                                // For simplicity, we'll just log the college name for now
                                console.log(`Clicked on ${college.collegeName}`);
                            }}
                        >
                            Apply Now
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeList;