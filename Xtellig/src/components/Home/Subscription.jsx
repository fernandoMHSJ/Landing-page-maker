import React from "react";

// Reusable SVG Component for Features
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" className={className} viewBox="0 0 24 24">
    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
  </svg>
);

// Plan Component for Reusability
const PlanCard = ({ title, description, price, features, isHighlighted }) => {
  const cardClassName = isHighlighted
    ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
    : "bg-white text-black";

  const buttonClassName = isHighlighted
    ? "w-full mt-6 px-6 py-3 rounded-xl text-black bg-white transition-all hover:bg-gray-100"
    : "w-full mt-6 px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800";

  const featureIconClassName = isHighlighted ? "mr-4 fill-white" : "mr-4 fill-green-500";

  return (
    <article className={`rounded sm:p-6 p-4 ${cardClassName}`}>
      {/* Plan Title and Description */}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>

      {/* Price Section */}
      <div className="mt-6">
        <h2 className="text-4xl font-semibold">
          {price} <span className="text-gray-500 ml-2 text-[15px]">/ Month</span>
        </h2>
        <button type="button" aria-label={`Subscribe to ${title} plan`} className={buttonClassName}>
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-6">
        <h4 className="mb-4 text-base font-bold">Plan Includes</h4>
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className={featureIconClassName} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

// Main Subscription Component
function Subscription() {
  // Plan Data
  const plans = [
    {
      title: "Free",
      description: "Ideal for individuals who need quick access to basic features.",
      price: "$0",
      features: [
        "50 Image generations",
        "500 Credits",
        "Monthly 100 Credits Free",
        "Customer Support",
        "Dedicated Server",
        "Priority Generations",
        "50GB Cloud Storage",
      ],
      isHighlighted: false,
    },
    {
      title: "Professional",
      description: "Ideal for individuals who need advanced features and tools for client work.",
      price: "$25",
      features: [
        "500 Image generations",
        "300 Credits",
        "Monthly 1000 Credits Free",
        "Customer Support",
        "Dedicated Server",
        "Priority Generations",
        "100GB Cloud Storage",
      ],
      isHighlighted: true,
    },
    {
      title: "Enterprise",
      description: "Designed for businesses that require robust solutions and unlimited access.",
      price: "Custom",
      features: [
        "Unlimited Image generations",
        "Unlimited Credits",
        "Custom Solutions",
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "Premium Security Features",
        "Unlimited Cloud Storage",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Choose a Subscription</h2>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid gap-8 mt-16 lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg max-md:mx-auto">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default Subscription;
