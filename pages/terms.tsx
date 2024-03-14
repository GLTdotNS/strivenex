import { RiLockPasswordLine } from "react-icons/ri"; // Importing a lock icon from React Icons
import Link from "next/link";
const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to StriveNex. These terms and conditions outline the rules and
          regulations for the use of StriveNex&apos;s Website, located at
          www.strivenex.com.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use StriveNex if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>
        <p className="mb-4">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements:
          &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
          you, the person log on this website and compliant to the Company’s
          terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;,
          &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our
          Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;,
          refers to both the Client and ourselves. All terms refer to the offer,
          acceptance and consideration of payment necessary to undertake the
          process of our assistance to the Client in the most appropriate manner
          for the express purpose of meeting the Client’s needs in respect of
          provision of the Company’s stated services, in accordance with and
          subject to, prevailing law of Netherlands. Any use of the above
          terminology or other words in the singular, plural, capitalization
          and/or he/she or they, are taken as interchangeable and therefore as
          referring to same.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Account Information</h2>
        <p className="mb-4">
          When you create an account with us, you must provide accurate,
          complete, and current information. You are responsible for maintaining
          the confidentiality of your account and password.
        </p>
        <p className="mb-4">
          You agree not to disclose your password to any third party. You must
          notify us immediately upon becoming aware of any breach of security or
          unauthorized use of your account.
        </p>
        <p className="mb-4">
          We reserve the right to terminate your account at our sole discretion
          if we believe that you have violated any provision of these Terms of
          Service.
        </p>
      </section>

      {/* Add more sections for other terms of service as needed */}

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding these Terms of
          Service, please <Link href="/contact">contact us</Link>.
        </p>
      </section>

      {/* Lock icon */}
      <div className="flex items-center justify-center">
        <RiLockPasswordLine className="text-blue-500 text-4xl mr-2" />
        <p className="text-sm text-gray-600">
          Your security is important to us.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
