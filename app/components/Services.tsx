import Link from "next/link";

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12" id="services">
      <h2>Services</h2>
      <p className="text-lg text-center text-gray-600 my-4">
        I help small businesses, nonprofits, and startups build modern,
        high-performance websites and web apps to grow their online presence.
      </p>

      <div className="border p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold">Landing Page</h2>
        <p className="text-gray-700 mt-2">
          A high-converting, single-page website designed to promote your
          product, service, or event
        </p>
        <ul className="list-none pl-6 mt-2 text-gray-600">
          <li>✅ Custom design with Next.js & Tailwind</li>
          <li>✅ Fast-loading & mobile-optimized</li>
          <li>✅ Call-to-action (CTA) buttons & lead capture</li>
          <li>✅ Contact form, social media links, or signup form</li>
        </ul>
        <p className="font-bold text-lg mt-4">$300 - $800 per project</p>
      </div>

      <div className="border p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold">Custom Website</h2>
        <p className="text-gray-700 mt-2">
          A fast, mobile-friendly website designed to showcase your brand and
          attract customers
        </p>
        <ul className="list-none pl-6 mt-2 text-gray-600">
          <li>✅ Blog, portfolio, or business site</li>
          <li>✅ Mobile-friendly & SEO optimized</li>
          <li>✅ Contact forms, social media links</li>
          <li>✅ Up to five pages</li>
        </ul>
        <p className="font-bold text-lg mt-4">$500 - $1,500 per project</p>
      </div>

      <div className="border p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold">Web Application</h2>
        <p className="text-gray-700 mt-2">
          Need something more advanced? I build interactive web apps with user
          authentication, databases, and custom features
        </p>
        <ul className="list-none pl-6 mt-2 text-gray-600">
          <li>✅ User authentication (login, signup, profiles)</li>
          <li>✅ Dashboards & data management</li>
          <li>✅ Booking systems, event platforms</li>
          <li>✅ API integrations (Stripe, Google Sheets, etc.)</li>
        </ul>
        <p className="font-bold text-lg mt-4">$1,500 - $10,000 per project</p>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/#contact"
          className="bg-teal-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-cyan-300"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
