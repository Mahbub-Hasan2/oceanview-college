import React from 'react';
import { Link } from 'react-router-dom';


const colleges = [
    {
        "collegeId": 1,
        "collegeImage": "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=600",
        "collegeName": "Sunshine University",
        "collegeRating": 4.5,
        "admissionDates": "2023-09-01 to 2023-09-30",
        "numberOfResearches": 120,
        "events": [
            {
                "eventName": "Orientation Day",
                "date": "2023-09-15",
                "location": "Main Auditorium"
            },
            {
                "eventName": "Career Fair",
                "date": "2023-10-10",
                "location": "Student Center"
            }
        ],
        "sports": [
            "Football",
            "Basketball",
            "Swimming"
        ]
    },
    {
        "collegeId": 2,
        "collegeImage": "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Evergreen College",
        "collegeRating": 4.2,
        "admissionDates": "2023-10-01 to 2023-11-15",
        "numberOfResearches": 90,
        "events": [
            {
                "eventName": "Fall Fest",
                "date": "2023-10-25",
                "location": "Campus Grounds"
            },
            {
                "eventName": "Research Symposium",
                "date": "2023-11-05",
                "location": "Science Center"
            }
        ],
        "sports": [
            "Soccer",
            "Volleyball",
            "Tennis"
        ]
    },
    {
        "collegeId": 3,
        "collegeImage": "https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Harmony University",
        "collegeRating": 4.8,
        "admissionDates": "2023-08-15 to 2023-09-15",
        "numberOfResearches": 150,
        "events": [
            {
                "eventName": "Freshers' Welcome Party",
                "date": "2023-09-01",
                "location": "Student Commons"
            },
            {
                "eventName": "Guest Lecture Series",
                "date": "2023-09-20",
                "location": "Lecture Hall B"
            }
        ],
        "sports": [
            "Cricket",
            "Badminton",
            "Table Tennis"
        ]
    },
    {
        "collegeId": 4,
        "collegeImage": "https://images.pexels.com/photos/639375/pexels-photo-639375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Majestic College",
        "collegeRating": 4.1,
        "admissionDates": "2023-09-20 to 2023-10-15",
        "numberOfResearches": 80,
        "events": [
            {
                "eventName": "Annual Fest",
                "date": "2023-10-05",
                "location": "Campus Grounds"
            },
            {
                "eventName": "Seminar on Innovation",
                "date": "2023-10-12",
                "location": "Seminar Hall"
            }
        ],
        "sports": [
            "Hockey",
            "Golf",
            "Swimming"
        ]
    },
    {
        "collegeId": 5,
        "collegeImage": "https://images.pexels.com/photos/3052502/pexels-photo-3052502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Everest University",
        "collegeRating": 4.4,
        "admissionDates": "2023-10-10 to 2023-11-30",
        "numberOfResearches": 100,
        "events": [
            {
                "eventName": "College Day",
                "date": "2023-11-15",
                "location": "Campus Grounds"
            },
            {
                "eventName": "Conference on Climate Change",
                "date": "2023-11-25",
                "location": "Seminar Hall"
            }
        ],
        "sports": [
            "Basketball",
            "Tennis",
            "Volleyball"
        ]
    },
    {
        "collegeId": 6,
        "collegeImage": "https://images.pexels.com/photos/1872485/pexels-photo-1872485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "collegeName": "Grandview College",
        "collegeRating": 4.6,
        "admissionDates": "2023-09-15 to 2023-10-31",
        "numberOfResearches": 110,
        "events": [
            {
                "eventName": "Annual Day Celebrations",
                "date": "2023-10-15",
                "location": "Campus Grounds"
            },
            {
                "eventName": "Seminar on Artificial Intelligence",
                "date": "2023-10-25",
                "location": "Seminar Hall"
            }
        ],
        "sports": [
            "Football",
            "Cricket",
            "Badminton"
        ]
    }
]




const CollegesPage = () => {
    return (
        <div className='py-20'>
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {colleges.map((college, index) => (
                        <div key={index} className="college-card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={college.collegeImage} alt={college.collegeName} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h3 className="college-name text-xl font-bold mb-2">{college.collegeName}</h3>
                                <p className="college-rating text-gray-600 mb-2">Rating: {college.collegeRating}</p>
                                <p className="admission-dates text-gray-600 mb-2">Admission Dates: {college.admissionDates}</p>
                                <p className="number-of-researches text-gray-600 mb-4">Number of Researches: {college.numberOfResearches}</p>
                                <Link to={`/college/${college.collegeId}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegesPage;