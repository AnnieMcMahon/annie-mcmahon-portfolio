import EventForm from "@/app/components/EventForm";

export default function Event() {
  return (
    <div className="md:max-w-3xl mx-auto px-6 py-12 text-gray-700">
      <h1 className="text-3xl font-bold text-center text-teal-700">
        🎉 WEBSITE GIVEAWAY 🎉
      </h1>
      <p className="text-lg text-center mt-4">
        Do you know a nonprofit, startup, or small business <br/> that&#39;s
        making an impact but can&#39;t afford a professional website?
        <br />
        <br />
        To celebrate the launch of my new business,{" "}
        <span className="font-bold text-teal-700">
          Annie McMahon Web Studio
        </span>, <br/>
        I want to give back by building websites for those who need them most.
      </p>

      <div className="bg-teal-100 p-6 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-semibold">How to Apply</h2>
        <p className="text-gray-700 mt-2">Submit:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Your name and e-mail</li>
          <li>Your nominee&#39;s name and e-mail (can be yourself)</li>
          <li>
            Why they need a free website
          </li>
          <li>
            A link to their social media or current website (if available)
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 mb-8 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-semibold">Prizes</h2>
        <p className="list-none pl-0 mt-2">
          🏆 <span className="font-bold">Two lucky winners</span> will receive a FREE professionally designed website. Choose from:</p>
        <ul className="list-disc pl-12 mt-2">
          <li>A one-page landing page</li>
          <li>A responsive website (up to five pages)</li>
        </ul>
      </div>
      <p className="text-center">
        I will handpick the most compelling entries based on their story, need, and potential impact.
      </p>
      <br/>
      <div className="bg-teal-200 p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-xl font-semibold">Important Dates</h2>
        <p className="mt-2">
          📅 <span className="font-bold">Deadline to enter:</span> March 31st
        </p>
        <p className="mt-1">
          🏆 <span className="font-bold">Winners will be announced</span> the
          first week of April
        </p>
      </div>
      <p className="text-center">
        Let&#39;s build something amazing together! 🚀
      </p>
      <EventForm />
    </div>
  );
}
