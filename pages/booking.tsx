import { useState, useMemo } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import countryList from "react-select-country-list";

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  branch: string;
  employees: string;
  package: string;
  email: string;
  country: { value: string; label: string } | null;
  phoneNumber: string;
  description: string;
}

const BuyNowPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    branch: "",
    employees: "",
    package: "",
    email: "",
    country: null,
    phoneNumber: "",
    description: "",
  });

  const [validData, setValidData] = useState<{
    firstName: boolean;
    lastName: boolean;
    companyName: boolean;
    branch: boolean;
    employees: boolean;
    package: boolean;
    email: boolean;
    country: boolean;
    phoneNumber: boolean;
    description: boolean;
  }>({
    firstName: false,
    lastName: false,
    companyName: false,
    branch: false,
    employees: false,
    package: false,
    email: false,
    country: false,
    phoneNumber: false,
    description: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidData({ ...validData, [name]: value.trim() !== "" });
  };

  const handleCountryChange = (
    selectedCountry: { value: string; label: string } | null
  ) => {
    setFormData({ ...formData, country: selectedCountry });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic here
    console.log(formData);
  };
  const options = useMemo(() => countryList().getData(), []);
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Buy Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />
              {validData.firstName && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />
              {validData.lastName && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />
              {validData.companyName && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            <div>
              <label
                htmlFor="branch"
                className="block text-gray-700 font-semibold mb-2"
              >
                Branch/Field of the Brand
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />
              {validData.branch && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="employees"
                className="block text-gray-700 font-semibold mb-2"
              >
                Number of Employees
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              >
                <option value="">Select Number of Employees</option>
                <option value="1-5">1-5</option>
                <option value="5-20">5-20</option>
                <option value="20+">20+</option>
              </select>
              {validData.employees && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            <div>
              <label
                htmlFor="package"
                className="block text-gray-700 font-semibold mb-2"
              >
                Package
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleInputChange}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              >
                <option value="">Select Package</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Custom">Custom</option>
              </select>
              {validData.package && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-10 outline-none border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />
              {validData.email && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-semibold mb-2"
              >
                Country
              </label>
              <Select
                placeholder="Select Country"
                value={formData.country}
                onChange={handleCountryChange}
                options={options}
                className="w-full  border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                required
              />

              {validData.country && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry="DE"
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData({ ...formData, phoneNumber: value || "" })
                }
                required
                className="w-full h-10 outline-none border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />

              {validData.phoneNumber && (
                <FaRegCheckCircle className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleTextareaChange} // Changed to handleTextareaChange
                rows={4}
                className="w-full border-gray-300 border rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              {validData.description && (
                <FaRegCheckCircle className="absolute right-3 bottom-3 text-green-500" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md font-semibold hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyNowPage;
