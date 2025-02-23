export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">My Services & Pricing</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Affordable and high-quality web solutions for small businesses, nonprofits, and startups.
      </p>

      <div className="grid gap-8">
        {/* Basic Website Package */}
        <div className="border p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">Basic Website</h2>
          <p className="text-gray-700 mt-2">
            A modern, mobile-friendly website for your business or nonprofit.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Up to 5 pages</li>
            <li>Custom design with Tailwind CSS</li>
            <li>SEO-friendly and fast-loading</li>
            <li>Basic contact form</li>
          </ul>
          <p className="font-bold text-lg mt-4">$500+ per project</p>
        </div>

        {/* Custom Web App Package */}
        <div className="border p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">Custom Web App</h2>
          <p className="text-gray-700 mt-2">
            Need an interactive dashboard or a web-based tool? I develop web apps using Next.js & Supabase.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Custom features tailored to your business</li>
            <li>User authentication (login system)</li>
            <li>Database integration (Supabase, Firebase, etc.)</li>
            <li>Secure and scalable</li>
          </ul>
          <p className="font-bold text-lg mt-4">$1,500+ per project</p>
        </div>

        {/* API Integrations & Automation */}
        <div className="border p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">API Integrations & Automations</h2>
          <p className="text-gray-700 mt-2">
            Save time and streamline your workflow with automated systems and third-party integrations.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Connect your website to third-party services</li>
            <li>Automate tasks (e.g., email notifications, database updates)</li>
            <li>Stripe, PayPal, Google API, and more</li>
          </ul>
          <p className="font-bold text-lg mt-4">$300+ per project</p>
        </div>
      </div>

      {/* Hourly Rate Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Need Custom Work?</h2>
        <p className="text-gray-700 mt-2">
          For larger projects or ongoing development, I offer hourly rates.
        </p>
        <p className="font-bold text-lg mt-2">$50–$75 per hour</p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
