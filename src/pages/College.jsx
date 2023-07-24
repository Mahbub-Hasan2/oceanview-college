import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import serverdomain from '../utils/serverdomain';

const College = () => {
    // We'll use React Router's useParams() hook to get the collegeId from the route
    const { collegeId } = useParams();

    // For this example, let's assume you have an array of college data with detailed information
    const [collegeData, setCollegeData] = useState([]); // Replace with the actual college data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch college data from the server
        const fetchCollegeData = async () => {
            try {
                const response = await fetch(`${serverdomain}/colleges/${collegeId}`); // Replace with the actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCollegeData(data);
                setLoading(false); // Data has been successfully fetched, set loading to false
            } catch (error) {
                setError('Error fetching college data. Please try again later.');
                setLoading(false); // There was an error, set loading to false
            }
        };

        fetchCollegeData();
    }, []); // Empty dependency array to run the effect only once



    // const college = collegeData.find(college => college.collegeId === Number(collegeId));

    // if (!college) {
    //     return <div>College not found!</div>;
    // }

    const { collegeImage, collegeName, admissionDates, admissionProcess, events, eventsDetails, researchHistory, sports } = collegeData;
    console.log(collegeData)
    return (
        <div className='pt-20'>
            <div className="container mx-auto">
                {loading && <p>Loading...</p>}

                {/* Display error message if there was an error */}
                {error && <p>Error: {error}</p>}

                {
                    !loading && !error &&
                    <div className="college-details p-4 md:p-8">
                        <div className="college-image-container mb-6 md:mb-8">
                            <img src={collegeImage} alt={collegeName} className="college-image w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="college-info">
                            <h2 className="college-name text-3xl font-bold mb-4 md:text-4xl">{collegeName}</h2>
                            <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Admission Process</h3>
                            <p className="admission-process mb-6">{admissionProcess}</p>
                            <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Admission Dates</h3>
                            {admissionDates?.start ?
                                <p className="admission-dates mb-6">Start: {admissionDates?.start} | End: {admissionDates?.end}</p>
                                :
                                <p className="admission-dates mb-6">{admissionDates}</p>
                            }
                            <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Events</h3>
                            <ul className="events-list">
                                {events?.map((event, index) => (
                                    <li key={index}>
                                        <p className="event-name font-bold mb-1">{event.eventName}</p>
                                        <p className="event-date">{event.date} | {event.location}</p>
                                        {
                                            eventsDetails &&
                                            <>
                                                <p className="event-description">{eventsDetails[index]?.description}</p>
                                                <p className="event-time">Time: {eventsDetails[index]?.time}</p>
                                            </>
                                        }

                                    </li>
                                ))}
                            </ul>
                            <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Research History</h3>
                            <p className="research-history mb-6">{researchHistory}</p>
                            <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Sports Categories</h3>
                            <ul className="sports-list">
                                {sports?.map((sport, index) => (
                                    <li key={index} className="mb-2">{sport}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default College;