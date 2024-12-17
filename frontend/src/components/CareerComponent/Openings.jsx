import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";
import ClockIcon from "../../assets/icons/ClockIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import { useState } from "react";

const JobCard = ({
  id,
  title,
  count,
  role,
  location,
  date,
  type,
  buttonLabel,
  isFirst,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = isFirst
    ? {
        background:
          "linear-gradient(180deg, rgba(29, 83, 255, 0.25) 15.73%, rgba(0, 32, 134, 0.15) 100%)",
        border: "1px solid transparent",
        borderImageSource: "linear-gradient(90deg, #003DFF 0%, #003DFF 100%)",
        backdropFilter: "blur(17.619792938232422px)",
        boxShadow: "0px 0px 2px 0px #003DFF4D",
        borderImageSlice: 1,
      }
    : {
        background:
          "linear-gradient(90deg, rgba(0, 61, 255, 0.05) 0.24%, rgba(0, 0, 0, 0.05) 140.01%)",
        border: "1px solid transparent",
        borderImageSource:
          "linear-gradient(273.01deg, rgba(255, 255, 255, 0.4) 0%, #003DFF 100%)",
        borderImageSlice: 1,
      };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Mouse enter handler based on `isFirst`
  const handleMouseEnterWithStyle = (e) => {
    if (!isFirst) {
      e.currentTarget.style.background =
        "linear-gradient(180deg, rgba(29, 83, 255, 0.25) 15.73%, rgba(0, 32, 134, 0.15) 100%)";
    }
  };
  const handleMouseEnterCombined = (e) => {
    handleMouseEnter(); // Call the second handler
    handleMouseEnterWithStyle(e); // Call the first handler
  };

  // Mouse leave handler based on `isFirst`
  const handleMouseLeaveWithStyle = (e) => {
    setIsHovered(false);
    if (!isFirst) {
      e.currentTarget.style.background =
        "linear-gradient(90deg, rgba(0, 61, 255, 0.05) 0.24%, rgba(0, 0, 0, 0.05) 140.01%)";
    }
  };

  return (
    <Link to={`${id}`} className="no-underline">
      <div
        className="p-6 mb-4 shadow-md text-white transition-all duration-300 hover:shadow-2xl relative openingCard cursor-pointer"
        style={cardStyle}
        onMouseEnter={handleMouseEnterCombined}
        onMouseLeave={handleMouseLeaveWithStyle}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">
            {title} ({count})
          </h3>
          <p className="text-sm flex gap-2 font-normal">
            {location}
            <LocationIcon />
          </p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm mb-2">{role}</p>
          <p className="text-sm mb-4 flex gap-2 font-normal">
            {date}
            <ClockIcon />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-sm text-xs bg-navblue bg-[#003DFF66]}`}
          >
            {type}
          </span>
          {isHovered && buttonLabel && (
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded"
              text={buttonLabel}
            >
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};

const JobOpenings = () => {
  const jobs = [
    {
      id: 1,
      title: "Front End Developer",
      count: 2,
      role: "Developer",
      location: "Kathmandu, Nepal",
      date: "25th Dec, 2024",
      type: "Full Time",
      buttonLabel: "Apply Now",
    },
    {
      id: 2,
      title: "QA Engineer",
      count: 2,
      role: "Quality Assurance",
      location: "Kathmandu, Nepal",
      date: "25th Dec, 2024",
      type: "Full Time",
      buttonLabel: null,
    },
    {
      id: 3,
      title: "Backend Developer",
      count: 3,
      role: "Developer",
      location: "Kathmandu, Nepal",
      date: "25th Dec, 2024",
      type: "Internship",
      buttonLabel: null,
    },
  ];

  return (
    <div className="text-white py-10 ms:px-6">
      <h1 className="text-center text-3xl font-bold mb-8">Job Openings</h1>
      <div className="max-w-4xl mx-auto">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            id={job.id}
            title={job.title}
            count={job.count}
            role={job.role}
            location={job.location}
            date={job.date}
            type={job.type}
            buttonLabel={job.buttonLabel}
            isFirst={index === 0} // Pass isFirst prop to highlight the first card
          />
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
JobCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  isFirst: PropTypes.bool, // To check if it's the first card
};

// Default props
JobCard.defaultProps = {
  buttonLabel: null,
  isFirst: false, // Default to false if not passed
};

export default JobOpenings;
