import EventForm from "@/app/components/EventForm";

export default function Event() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-700">
      <h1 className="text-3xl font-bold text-center text-teal-700">🎉 MARCH MADNESS WEBSITE GIVEAWAY! 🎉</h1>
      <p className="text-lg text-center mt-4">
      Do you know a nonprofit, startup, or small business in WNC that&#39;s making an impact but can&#39;t afford a professional website?
      <br/>
      <br/>
To celebrate the launch of <span className="font-bold text-teal-700">Annie McMahon Web Studio</span>, I want to give back by building free websites for those who need them most.
      </p>
      
      <div className="bg-white-100 p-6 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-semibold">How to Apply</h2>
        <p className="text-gray-700 mt-2">Submit:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Your name and e-mail</li>
          <li>Your nominee&#39;s name and e-mail (can be yourself)</li>
          <li>Why they deserve a free website (the more compelling, the better!)</li>
          <li>A link to their social media or current website (if available)</li>
        </ul>
      </div>
      
      <div className="bg-gray-100 p-6 mb-8 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-semibold">Prizes</h2>
        <p className="list-none pl-0 mt-2">
          🏆 <span className="font-bold">Two lucky winners</span> will receive a FREE professionally designed website!</p>
          <br/>
          <p>Choose from:</p>
          <ul className="list-disc pl-6">
            <li>A one-page landing page</li>
            <li>A responsive website (up to five pages)</li>
          </ul>
          <br/>
          <p>🎉 <span className="font-bold">Bonus:</span> Up to three more will receive an exclusive <span className="font-bold">50% discount</span> on a website:</p>
          <ul className="list-disc pl-6">
            <li>Landing page: $150 (normally $300)</li>
            <li>Professional website of up to five pages: $250 (normally $500)</li>
          </ul>
      </div>
      <p className="text-center">I will handpick the most compelling entries based on their story, need, and potential impact.
</p>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg m-6">
        <h2 className="text-xl font-semibold">Important Dates</h2>
        <p className="mt-2">📅 <span className="font-bold">Deadline to enter:</span> March 31st</p>
        <p className="mt-1">🏆 <span className="font-bold">Winners will be announced</span> the first week of April</p>
      </div>
<p className="text-center">Let&#39;s build something amazing together! 🚀</p>
      
      <div className="text-center m-8">
        <EventForm />
      </div>
    </div>
  );
}