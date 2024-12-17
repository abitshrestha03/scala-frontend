import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();

  // Mock Data or Fetch API
  const jobs = [
    {
      id: 1,
      title: "Front End Developer",
      description: "Number of Openings - 2",
      location: "Kathmandu, Nepal",
      postedDate: "Nov 10, 2024",
      deadlineDate: "25th Dec, 2024",
      jobType: "Full Time",
      jobSummary:
        "We are seeking a skilled Front-End Developer with a keen eye for design and a deep understanding of web technologies. In this role, you will collaborate with designers, back-end developers, and project managers to create responsive, user-friendly, and visually appealing web applications.",
      responsibilities: [
        "Develop and maintain user interfaces using modern frameworks like React, Angular, or Vue.js.",
        "Collaborate with UI/UX designers and back-end developers to ensure seamless integration.",
        "Focus on web optimization techniques to enhance performance and speed.",
        "Write clean, scalable, and reusable code.",
        "Ensure cross-browser compatibility and perform code reviews.",
        "Debug and troubleshoot front-end issues.",
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science, Information Technology, or a related field.",
        "Minimum 2 years of experience in front-end development.",
        "Proficiency in HTML, CSS, JavaScript, and modern frameworks (e.g., React, Angular, Vue).",
        "Knowledge of responsive design principles and mobile-first development.",
        "Strong debugging and problem-solving skills.",
        "Excellent communication skills and teamwork ability.",
      ],
      offer: [
        "Competitive salary and benefits package.",
        "Opportunities for career growth and skill development.",
        "A collaborative and innovative work environment.",
      ],
      howToApply:
        "Interested candidates should submit their resumes and links to their portfolio or GitHub repository. If available, please share a cover letter describing your experience with front-end technologies and why you are excited about working with us.",
    },
  ];

  const job = jobs.find((job) => job.id === parseInt(jobId));

  return (
    <div className="text-white ms:px-6 md:px-8 lg:px-20 xl:px-32 mt-24">
      {job ? (
        <>
          <Link to="/resources/careers">
            {"< "}
            <span className="underline">Back</span>
          </Link>
          {/* Job Header */}
          <div className="flex gap-5 mb-4 mt-12 md:w-1/4 items-center">
            <button className="bg-navblue text-xs px-2 py-1 rounded-sm">
              {job.jobType}
            </button>
            <p className="text-xs font-normal">{job.postedDate}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">{job.title}</h3>
            <p className="text-sm font-semibold">{job.description}</p>
            <p className="text-sm text-gray-400">{job.location}</p>
            <p className="text-sm text-gray-400">{job.deadlineDate}</p>
          </div>

          {/* Job Details */}
          <div
            className="pt-4 pb-2 px-4 mt-8"
            style={{
              background:
                "linear-gradient(129.66deg, rgba(0, 0, 0, 0.128) 1.43%, rgba(0, 61, 255, 0.096) 100%)",
              border: "1px solid",
              borderImageSource:
                "linear-gradient(168.95deg, rgba(255, 255, 255, 0.5) 0%, #003DFF 100%)",
              borderImageSlice: 1,
            }}
          >
            <div className="summary">
              <h3 className="text-lg font-semibold">Job Summary</h3>
              <p className="text-sm text-gray-300">{job.jobSummary}</p>
            </div>
            <div className="mt-6 responsibilities">
              <h3 className="text-lg font-semibold">Key Responsibilities</h3>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Qualifications</h3>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            {/* What We Offer */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">What We Offer</h3>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                {job.offer.map((offerItem, index) => (
                  <li key={index}>{offerItem}</li>
                ))}
              </ul>
            </div>

            {/* How to Apply */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">How to Apply</h3>
              <p className="text-sm text-gray-300">{job.howToApply}</p>
              <form
                className="mt-4 p-6 rounded-md shadow-md"
                style={{
                  background: `linear-gradient(132.09deg, rgba(0, 0, 0, 0.128) 1.37%, rgba(0, 61, 255, 0) 131.51%),
                  border: 1px solid`,
                  borderImageSource: `linear-gradient(128.92deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 21.83%, rgba(0, 61, 255, 0.3) 48.33%, rgba(0, 61, 255, 0.77) 64.17%, rgba(0, 61, 255, 0.5) 100%)`,
                  borderImageSlice:2,
                }}
              >
                <div className="mb-4">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      How did you hear about us
                    </option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="friend">Friend</option>
                    <option value="jobBoard">Job Board</option>
                  </select>
                </div>

                <div className="mb-4">
                  <div className="relative w-full flex items-center border-b border-gray-500 pb-4">
                    {/* Label for Input */}
                    <label htmlFor="resume" className="text-sm text-gray-400">
                      Upload Resume
                    </label>

                    {/* Invisible File Input */}
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    {/* Styled Upload Button */}
                    <label
                      htmlFor="resume"
                      className="absolute right-0 px-4 py-1 bg-navblue text-white text-sm rounded cursor-pointer hover:bg-blue-600"
                    >
                      Upload
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    id="reason"
                    name="reason"
                    rows="3"
                    placeholder="Why do you want to join Scala-tech?"
                    className="w-full px-2 pb-0 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="currentSalary"
                    name="currentSalary"
                    placeholder="Current Salary"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    placeholder="Expected Salary"
                    className="w-full px-2 py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-navblue hover:bg-blue-600 px-4 py-2 rounded text-white text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
};

export default JobDetails; 