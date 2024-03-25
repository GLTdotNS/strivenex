import { useState, useMemo } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countryList from "react-select-country-list";
import Loading from "../components/Loading/Loading";
import SuccessMessage from "../components/Success/Success";
import letter from "../styles/letter.png";
interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  branch: string;
  employees: string;
  email: string;
  country: { value: string; label: string } | null;
  phoneNumber: string;
  description: string;
  budget: string;
}

const BuyNowPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    branch: "",
    employees: "",
    email: "",
    country: null,
    phoneNumber: "",
    description: "",
    budget: "",
  });

  const [validData, setValidData] = useState<{
    firstName: boolean;
    lastName: boolean;
    companyName: boolean;
    branch: boolean;
    employees: boolean;
    email: boolean;
    country: boolean;
    phoneNumber: boolean;
    description: boolean;
    budget: boolean;
  }>({
    firstName: false,
    lastName: false,
    companyName: false,
    branch: false,
    employees: false,
    email: false,
    country: false,
    phoneNumber: false,
    description: false,
    budget: false,
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          branch: "",
          employees: "",
          email: "",
          country: null,
          phoneNumber: "",
          description: "",
          budget: "", // Add budget with an empty string or default value
        });
      } else {
        // Handle other HTTP status codes, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error, e.g., show an error message to the user
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="proxima min-h-screen bg-white-50 flex lg:p-8  lg:mt-0 justify-center items-center fade-in font-serif spacing-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        <div className="lg:p-24 rounded-lg  lg:border-r-2 p-4">
          <h2 className="text-3xl  uppercase mt-36 mb-8">
            Ready to kick-start your project?{" "}
          </h2>

          <ul className="">
            <li className="text-2xl">
              Fill out our contact form on our website, and we&apos;ll get back
              to you as soon as possible.
            </li>
            <li className="text-2xl mt-4 mb-4 text-center">OR</li>
            <li className="text-2xl spacing-2 mt-4">
              Connect with us via our support chat and discuss your project
              requirements in real-time.
            </li>
          </ul>
          <img src={letter.src} alt="Your Image" className="mb-4 mx-auto" />
        </div>

        <div className="p-8 rounded-lg  ">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {isSuccess ? (
                <SuccessMessage />
              ) : (
                <>
                  {" "}
                  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 mt-36">
                    Book a demo
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
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                          placeholder="John "
                        />
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
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                          placeholder="Doe"
                        />
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
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                          placeholder="StriveNex ltd"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="branch"
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Field of the Brand
                        </label>
                        <input
                          type="text"
                          id="branch"
                          name="branch"
                          value={formData.branch}
                          onChange={handleInputChange}
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                          placeholder="Culinary arts"
                        />
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
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                        >
                          <option value="">Select Number of Employees</option>
                          <option value="1-5">1-5</option>
                          <option value="5-20">5-20</option>
                          <option value="20+">20+</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols- gap-6">
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-gray-700 font-semibold mb-2"
                          >
                            Budget
                          </label>
                          <input
                            type="text"
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                            required
                            placeholder="Between 500€ and 1,500€"
                          />
                        </div>
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
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                          required
                          placeholder="johndoe@gmail.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Country
                        </label>
                        <Select
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused
                                ? "transparent"
                                : "transparent",
                            }),
                          }}
                          placeholder="Select Country"
                          value={formData.country}
                          onChange={handleCountryChange}
                          options={options}
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm "
                          required
                        />
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
                            setFormData({
                              ...formData,
                              phoneNumber: value || "",
                            })
                          }
                          required
                          className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        />
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
                          onChange={handleTextareaChange}
                          rows={4}
                          className="w-full border-sky-600 p-4 border rounded-md shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className=" w-full py-3 bg-gradient-to-r from-sky-300 to-sky-600 text-white rounded-md font-semibold hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition-all duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
