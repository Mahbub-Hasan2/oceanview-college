import React from 'react';
import { useParams } from 'react-router-dom';

const College = () => {
    // We'll use React Router's useParams() hook to get the collegeId from the route
    const { collegeId } = useParams();

    // For this example, let's assume you have an array of college data with detailed information
    const collegeData = [
        {
            "collegeId": 1,
            "collegeImage": "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=600",
            "collegeName": "Sunshine University",
            "admissionDates": {
                "start": "2023-09-01",
                "end": "2023-09-30"
            },
            "admissionProcess": "To apply for admissions at Sunshine University, candidates need to visit the university's official website and fill out the online application form. The application period starts from September 1st to September 30th. Applicants must provide their academic records, standardized test scores, and other required documents during the application process.",
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
            "eventsDetails": [
                {
                    "eventName": "Orientation Day",
                    "description": "Orientation Day is a special event to welcome new students to Sunshine University. It provides essential information about campus life, academic programs, and extracurricular activities. Students will have the opportunity to meet faculty, staff, and fellow students.",
                    "time": "9:00 AM - 1:00 PM"
                },
                {
                    "eventName": "Career Fair",
                    "description": "The Career Fair is organized to connect students with potential employers and industry professionals. Companies from various sectors participate in the fair to recruit talented students for internships and full-time positions. Students are encouraged to bring their resumes and prepare for networking opportunities.",
                    "time": "10:00 AM - 4:00 PM"
                }
            ],
            "researchHistory": "Sunshine University is renowned for its cutting-edge research in environmental science and sustainable technology. The university's research facilities and expert faculty members contribute significantly to innovative breakthroughs in various fields.",
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
            "admissionDates": {
                "start": "2023-10-01",
                "end": "2023-11-15"
            },
            "admissionProcess": "Evergreen College welcomes applications from aspiring students from diverse backgrounds. Prospective students can apply online through the college website or submit a physical application form. The application window opens from October 1st to November 15th. Applicants are evaluated based on their academic achievements, extracurricular activities, and letters of recommendation.",
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
            "eventsDetails": [
                {
                    "eventName": "Fall Fest",
                    "description": "Fall Fest is an annual celebration of the changing seasons. Students and faculty come together for a day of fun-filled activities, including games, food stalls, and live performances. It's a great opportunity for new students to connect with the college community.",
                    "time": "11:00 AM - 4:00 PM"
                },
                {
                    "eventName": "Research Symposium",
                    "description": "The Research Symposium is a platform for students and faculty to showcase their latest research findings. Participants present their work through presentations and poster sessions. It fosters intellectual discussions and promotes interdisciplinary collaboration.",
                    "time": "9:00 AM - 5:00 PM"
                }
            ],
            "researchHistory": "Evergreen College has a rich research history, particularly in the fields of biology and medicine. Several groundbreaking research projects have contributed significantly to advancements in healthcare and biological sciences.",
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
            "admissionDates": {
                "start": "2023-08-15",
                "end": "2023-09-15"
            },
            "admissionProcess": "Harmony University's admission process is highly competitive and selective. Prospective students must submit their applications by September 15th to be considered for the upcoming academic year. Admissions are based on a holistic evaluation, taking into account academic achievements, extracurricular involvement, personal statements, and letters of recommendation.",
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
            "eventsDetails": [
                {
                    "eventName": "Freshers' Welcome Party",
                    "description": "The Freshers' Welcome Party is an exciting event to introduce new students to the Harmony University community. It features music, dance, and interactive activities to help freshmen feel at home. It's a wonderful opportunity for students to make friends and socialize.",
                    "time": "6:00 PM - 9:00 PM"
                },
                {
                    "eventName": "Guest Lecture Series",
                    "description": "The Guest Lecture Series brings renowned scholars and experts to Harmony University to share their insights and knowledge with the academic community. The lectures cover a wide range of subjects, sparking intellectual curiosity among students and faculty.",
                    "time": "10:00 AM - 12:00 PM"
                }
            ],
            "researchHistory": "Harmony University has been a pioneer in music and arts research, producing world-renowned musicians and artists. The university's conservatories and music programs have nurtured exceptional talent and enriched the world of performing arts.",
            "sports": [
                "Cricket",
                "Badminton",
                "Table Tennis"
            ]
        }
    ];


    const college = collegeData.find(college => college.collegeId === Number(collegeId));

    if (!college) {
        return <div>College not found!</div>;
    }

    const { collegeImage, collegeName, admissionDates, admissionProcess, events, eventsDetails, researchHistory, sports } = college;

    return (
        <div className='pt-20'>
            <div className="container mx-auto">
                <div className="college-details p-4 md:p-8">
                    <div className="college-image-container mb-6 md:mb-8">
                        <img src={collegeImage} alt={collegeName} className="college-image w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="college-info">
                        <h2 className="college-name text-3xl font-bold mb-4 md:text-4xl">{collegeName}</h2>
                        <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Admission Process</h3>
                        <p className="admission-process mb-6">{admissionProcess}</p>
                        <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Admission Dates</h3>
                        <p className="admission-dates mb-6">Start: {admissionDates.start} | End: {admissionDates.end}</p>
                        <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Events</h3>
                        <ul className="events-list">
                            {events.map((event, index) => (
                                <li key={index}>
                                    <p className="event-name font-bold mb-1">{event.eventName}</p>
                                    <p className="event-date">{event.date} | {event.location}</p>
                                    <p className="event-description">{eventsDetails[index].description}</p>
                                    <p className="event-time">Time: {eventsDetails[index].time}</p>
                                </li>
                            ))}
                        </ul>
                        <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Research History</h3>
                        <p className="research-history mb-6">{researchHistory}</p>
                        <h3 className="section-title text-xl font-bold mb-2 md:text-2xl">Sports Categories</h3>
                        <ul className="sports-list">
                            {sports.map((sport, index) => (
                                <li key={index} className="mb-2">{sport}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;