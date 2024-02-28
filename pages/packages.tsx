// pages/packages.tsx

import React from "react";

interface PackageInfo {
  name: string;
  description: string;
  features: string[];
}

const packages: PackageInfo[] = [
  {
    name: "Essential Starter Pack",
    description: "Ideal for startups and small businesses.",
    features: [
      "Basic website setup",
      "Social media integration",
      "SEO optimization",
    ],
  },
  {
    name: "Standard Growth Package",
    description: "Designed for businesses looking to expand their reach.",
    features: [
      "Advanced website customization",
      "Content marketing strategy",
      "Email marketing campaign",
    ],
  },
  {
    name: "Advanced Advantage Package",
    description: "Tailored for businesses seeking a competitive edge.",
    features: [
      "Custom branding design",
      "PPC advertising management",
      "Conversion rate optimization",
    ],
  },
  {
    name: "Premium Power Pack",
    description: "For established businesses aiming for maximum impact.",
    features: [
      "Comprehensive marketing analysis",
      "Brand identity development",
      "Advanced analytics tracking",
    ],
  },
  {
    name: "Elite Enterprise Package",
    description: "Designed for large corporations and enterprises.",
    features: [
      "Customized enterprise solutions",
      "Dedicated account management",
      "24/7 technical support",
    ],
  },
];

const PackagesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Business Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((packageInfo, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">{packageInfo.name}</h2>
            <p>{packageInfo.description}</p>
            <ul className="mt-4">
              {packageInfo.features.map((feature, index) => (
                <li key={index} className="list-disc ml-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
