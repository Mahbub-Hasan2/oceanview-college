import React, { useState } from 'react';


const Profile = () => {

    // Sample user data (You can replace this with actual user data)
    const initialUserData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        university: 'Sunshine University',
        address: '1234 Main St, Cityville',
    };

    // State to hold the user data
    const [userData, setUserData] = useState(initialUserData);

    // State to toggle edit mode
    const [editMode, setEditMode] = useState(false);

    // Event handlers for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    };

    // Event handler for saving updated data
    const handleSave = () => {
        setEditMode(false);
        // You can send the updated userData to the server or save it locally as needed
        console.log('Updated data:', userData);
    };
    return (
        <div className='py-20'>
            <div className="p-4 md:p-8">
                <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">My Profile</h2>
                {/* Display user details */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        {editMode ? (
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                className="form-input block w-full"
                            />
                        ) : (
                            <div>{userData.name}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        {editMode ? (
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="form-input block w-full"
                            />
                        ) : (
                            <div>{userData.email}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="university" className="block text-gray-700 font-bold mb-2">
                            University:
                        </label>
                        {editMode ? (
                            <input
                                type="text"
                                id="university"
                                name="university"
                                value={userData.university}
                                onChange={handleChange}
                                className="form-input block w-full"
                            />
                        ) : (
                            <div>{userData.university}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Address:
                        </label>
                        {editMode ? (
                            <textarea
                                id="address"
                                name="address"
                                value={userData.address}
                                onChange={handleChange}
                                className="form-textarea block w-full"
                                rows="4"
                            ></textarea>
                        ) : (
                            <div>{userData.address}</div>
                        )}
                    </div>
                    {editMode ? (
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                onClick={() => setEditMode(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            onClick={() => setEditMode(true)}
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;