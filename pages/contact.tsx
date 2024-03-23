import { useState } from "react";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import Loading from "../components/Loading/Loading";
import SuccessMessage from "../components/Success/Success";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8">
              {messageSent ? (
                <SuccessMessage />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 max-w-md mx-auto mt-40"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-sky-600 p-4 border rounded-full shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        placeholder="John Doe"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2 mt-12"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-sky-600 p-4 border rounded-md shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                      rows={6}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="flex flex-col items-center justify-center h-full">
                <FiMail className="text-blue-500 text-6xl mb-4" />
                <p className="text-lg text-center mb-4">
                  We are happy to hear from you! We will respond as soon as
                  possible.
                </p>
                <p className="text-lg text-center mb-4">
                  If you prefer, you can also reach us via our support chat.
                </p>
                <div className="flex justify-center space-x-4">
                  <p className="text-lg text-center mb-4">
                    Interested in what we offer? Get started today with a
                    personalized demo!
                  </p>
                </div>
                <Link
                  href="/booking"
                  className="hover-2 bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-200"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;
