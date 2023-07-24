import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({collegeData}) => {
    const { collegeId, collegeImage, collegeName, admissionDates, events, researchHistory, sports } = collegeData;

    return (
        <div  className="college-card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="college-image bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${collegeImage})` }}>
                <div className="apply-btn-container flex justify-end">
                    <Link to={`college/${collegeId}`}> 
                        <button className="apply-btn bg-primary text-white px-4 py-2 rounded-md">Details</button>
                    </Link>
                </div>
            </div>
            <div className="college-info p-4">
                <p className="college-name uppercase tracking-wide text-sm font-bold text-gray-700">
                    {collegeName}
                </p>
                <p className="admission-dates text-gray-700">
                    Admission Dates: {admissionDates.start} - {admissionDates.end}
                </p>
                <div className="events-container">
                    <p className="events-title uppercase tracking-wide text-sm font-bold text-gray-700">
                        Events:
                    </p>
                    <ul className="events-list">
                        {events.map((event, index) => (
                            <li key={index} className="event-item">
                                {event.eventName} - {event.date}, {event.location}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="research-history text-gray-700">{researchHistory}</p>
                <div className="sports-container">
                    <p className="sports-title uppercase tracking-wide text-sm font-bold text-gray-700">
                        Sports:
                    </p>
                    <ul className="sports-list">
                        {sports.map((sport, index) => (
                            <li key={index} className="sport-item">
                                {sport}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;