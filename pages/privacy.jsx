import { FiMail, FiLock, FiInfo, FiSettings } from "react-icons/fi";
import { FaUser, FaCreditCard } from "react-icons/fa";
import Link from "next/link";
const PrivacyAndCookiePolicyPage = () => {
  return (
    <div className="m-auto lg:w-[50%] sm:w-[100%] p-8">
      <h1 className="text-3xl font-bold mb-8 mt-24">
        Privacy and Cookie Policy
      </h1>
      <p className="mb-4">Last updated: 12.08.2023</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          1. Personal Data Collection and Use
        </h2>
        <p className="mb-4">1.1 Types of Personal Data Collected:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <FaUser className="inline text-blue-500 mr-2" /> Name
          </li>
          <li>
            <FiMail className="inline text-blue-500 mr-2" /> Contact information
            (email address, phone number, mailing address)
          </li>
          <li>
            <FaCreditCard className="inline text-blue-500 mr-2" /> Payment
            information
          </li>
          <li>
            <FiSettings className="inline text-blue-500 mr-2" /> User
            preferences and settings
          </li>
          <li>
            <FiInfo className="inline text-blue-500 mr-2" /> Other information
            provided voluntarily by the user
          </li>
        </ul>

        <p className="mb-4">
          1.2 Purpose of Data Collection: We collect personal data to facilitate
          the purchase process, provide customer support, improve our services,
          and personalize user experiences.
        </p>

        <p className="mb-4">
          1.3 Data Security: We implement appropriate technical and
          organizational measures to protect personal data from unauthorized
          access, disclosure, alteration, or destruction.
        </p>

        <p className="mb-4">
          1.4 Third-Party Disclosure: We do not sell, trade, or otherwise
          transfer personal data to third parties without user consent, except
          as required by law or to fulfill the purposes outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Use of Cookies</h2>
        <p className="mb-4">
          2.1 What Are Cookies: Cookies are small text files stored on a
          user&apos;s device by a web browser. They enhance user experience by
          remembering preferences and optimizing site performance.
        </p>

        <p className="mb-4">2.2 Types of Cookies Used:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <FiLock className="inline text-blue-500 mr-2" /> Essential Cookies:
            Necessary for the functioning of the platform and cannot be
            disabled.
          </li>
          <li>
            <FiInfo className="inline text-blue-500 mr-2" />{" "}
            Analytical/Performance Cookies: Used to analyze site performance and
            improve functionality.
          </li>
          <li>
            <FiSettings className="inline text-blue-500 mr-2" /> Functional
            Cookies: Enable enhanced features and personalization.
          </li>
          <li>
            <FiSettings className="inline text-blue-500 mr-2" />{" "}
            Targeting/Advertising Cookies: Used to deliver personalized
            advertisements based on user interests and behavior.
          </li>
        </ul>

        <p className="mb-4">
          2.3 Cookie Consent: By using our platform, users consent to the use of
          cookies in accordance with this policy. Users may manage cookie
          preferences through browser settings.
        </p>

        <p className="mb-4">
          2.4 Third-Party Cookies: We may allow third-party services to use
          cookies on our platform for analytics, advertising, and other
          purposes. Users should review the privacy policies of these third
          parties for information on their cookie practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Updates to this Policy</h2>
        <p className="mb-4">
          We reserve the right to update or modify this Privacy and Cookie
          Policy at any time. Any changes will be posted on this page with a
          revised &quot;last updated&quot; date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Privacy and
          Cookie Policy, please contact us on our{" "}
          <Link className="text-blue-500" href="/contact">
            contact page
          </Link>{" "}
          or via our support chat.
        </p>
      </section>

      <p className="text-sm">
        By using our platform, you agree to the terms outlined in this Privacy
        and Cookie Policy.
      </p>
    </div>
  );
};

export default PrivacyAndCookiePolicyPage;
