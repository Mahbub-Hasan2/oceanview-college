import React, { useState } from 'react';

const AdmissionForm = () => {

    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: '',
        subject: '',
        candidateEmail: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        image: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateInfo((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic to handle the form submission here
        console.log(candidateInfo);
        // Reset the form fields after submission
        setCandidateInfo({
          candidateName: '',
          subject: '',
          candidateEmail: '',
          candidatePhone: '',
          address: '',
          dateOfBirth: '',
          image: '',
        });
      };

    return (
        <div>
            <div className="p-4 md:p-8">
                <h2 className="section-title text-2xl font-bold mb-4 md:text-3xl">Admission Form</h2>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="mb-4">
                        <label htmlFor="candidateName" className="block text-gray-700 font-bold mb-2">
                            Candidate Name:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            name="candidateName"
                            value={candidateInfo.candidateName}
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={candidateInfo.subject}
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="candidateEmail" className="block text-gray-700 font-bold mb-2">
                            Candidate Email:
                        </label>
                        <input
                            type="email"
                            id="candidateEmail"
                            name="candidateEmail"
                            value={candidateInfo.candidateEmail}
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="candidatePhone" className="block text-gray-700 font-bold mb-2">
                            Candidate Phone Number:
                        </label>
                        <input
                            type="tel"
                            id="candidatePhone"
                            name="candidatePhone"
                            value={candidateInfo.candidatePhone}
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Address:
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={candidateInfo.address}
                            onChange={handleChange}
                            className="form-textarea block w-full"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={candidateInfo.dateOfBirth}
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                            Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="form-input block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;