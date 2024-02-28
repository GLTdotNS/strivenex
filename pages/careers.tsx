import React, { useState } from "react";

const CareersPage = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with CV file:", cvFile);
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-900 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-2">
          We are looking for talented individuals to join us!
        </p>
      </header>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
        {/* List of current job openings */}
        <ul className="list-disc ml-8">
          <li>Job Opening 1</li>
          <li>Job Opening 2</li>
          <li>Job Opening 3</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Submit Your Application</h2>
          {/* Application form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="cv" className="block font-medium text-gray-700">
                Upload CV
              </label>
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 form-input block w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 form-input block w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                className="mt-1 form-textarea block w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
