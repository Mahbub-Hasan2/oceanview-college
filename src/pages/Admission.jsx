import React from 'react';
import CollegeList from '../components/Admission/CollegeList';
import AdmissionForm from '../components/Admission/AdmissionForm';

const Admission = () => {
    const colleges = [
        {
            collegeId: 1,
            collegeName: "Sunshine University",
        },
        {
            collegeId: 2,
            collegeName: "Evergreen College",
        },
        {
            collegeId: 3,
            collegeName: "Harmony University",
        },
        // Add more colleges as needed
    ];

    return (
        <div>
            {/* Other content on the admission page */}
            <CollegeList colleges={colleges} />
            {/* Other content on the admission page */}
            {/* Show the AdmissionForm only when a college name is clicked */}
            {/* You can use React Router to manage the routes */}
            {/* For now, we'll just show the form directly */}
            <AdmissionForm />
        </div>
    );
};

export default Admission;