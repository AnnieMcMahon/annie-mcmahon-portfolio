import Link from "next/link";

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12" id="services">
      <h2>Services</h2>
      <p className="text-lg text-center text-gray-600 my-4">
        I help small businesses, nonprofits, and startups build modern, high-performance websites to grow their online presence. Request your free consultation today and let&#39;s bring your vision to life!
      </p>

      <div className="border p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold">Landing Page</h2>
        <p className="text-gray-700 mt-2">
          A high-converting, single-page website designed to promote your product, service, or event
        </p>
        <ul className="list-none md:pl-6 mt-2 text-gray-600">
          <li>✅ Choose from templates or provide your own design</li>
          <li>✅ Fast-loading and mobile-optimized</li>
          <li>✅ Contact or signup form, social media links, call-to-action (CTA) button</li>
          <li>✅ Free hosting</li>
          <li>✅ Ability to easily convert to Professional Website with pages in the future</li>          
        </ul>
        <p className="font-bold text-lg mt-4">$300 per project</p>
      </div>

      <div className="border p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold">Professional Website</h2>
        <p className="text-gray-700 mt-2">
          A fast, mobile-friendly website designed to showcase your brand and attract customers
        </p>
        <ul className="list-none md:pl-6 mt-2 text-gray-600">
          <li>✅ Ideal for portfolio or business site</li>
          <li>✅ Showcase your employees, projects, or photo gallery</li>
          <li>✅ Add a landing page for your special event or an About page to tell your story</li>
          <li>✅ Up to five pages</li>
          <li>✅ Free hosting</li>
          <li>✅ Ability to easily add a blog or database in the future</li>
        </ul>
        <p className="font-bold text-lg mt-4">$500 per project</p>
      </div>

      <div className="border p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold">Advanced Website with Custom Features</h2>
        <p className="text-gray-700 mt-2">
          All of the above, plus more!
        </p>
        <ul className="list-none md:pl-6 mt-2 text-gray-600">
          <li>✅ Professional responsive website with added functionality based on your needs</li>
          <li>✅ Create a new blog or import an existing one</li>
          <li>✅ Add a database connection</li>
          <li>✅ Integrate safe login and authentication for your users</li>
          <li>✅ Get a quote for your special requests</li>
        </ul>
        <p className="font-bold text-lg mt-4">Starting at $750</p>
      </div>

      <div className="border p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold">Maintenance Service</h2>
        <p className="text-gray-700 mt-2">
          Want to change something? Already have a website but want to tweak it a little?
        </p>
        <ul className="list-none md:pl-6 mt-2 text-gray-600">
          <li>✅ Make changes to your website whenever needed</li>
          <li>✅ Add a new page to your existing website or convert your Landing Page to a Professional Website with up to five pages</li>
          <li>✅ Update your About page or contact information</li>
          <li>✅ Temporarily add an Event page for your special event or campaign</li>
        </ul>
        <p className="font-bold text-lg mt-4">$50/hour</p>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/#contact"
          className="bg-teal-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-teal-600 transition"
        >
          Let&#39;s do it!
        </Link>
      </div>
    </div>
  );
}
