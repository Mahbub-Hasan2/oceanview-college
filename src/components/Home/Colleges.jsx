import React, { useContext, useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import serverdomain from '../../utils/serverdomain';
import { AppContext } from '../../layouts/AuthContextProvider';


const Colleges = () => {
    const {collegeData, setCollegeData, filter} = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch college data from the server
        const fetchCollegeData = async () => {
            try {
                const response = await fetch(`${serverdomain}/colleges`); // Replace with the actual API endpoint
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

    return (
        <div className="md:py-20 py-5">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {loading && <p>Loading...</p>}

                    {/* Display error message if there was an error */}
                    {error && <p>Error: {error}</p>}

                    {/* Display the list of colleges */}
                    {!loading && !error && collegeData.filter((college) => {
                        if (filter == "") {
                            return college
                        }
                        else if (college.collegeName.toLowerCase().includes(filter.toLowerCase())) {
                            return college
                        }
                    }).slice(0, 3).map((college) => (
                        <CollegeCard key={college._id} collegeData={college} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Colleges;