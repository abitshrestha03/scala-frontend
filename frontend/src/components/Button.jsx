import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-3 text-white hover:bg-blue-700 rounded-[4px]"
      style={{
        // Gradient background
        background: "linear-gradient(180deg, #003DFF 0%, #002086 100%)",
        // Transparent border (just for fallback)
        border: "1px solid transparent",
        // Prevent overflow of inner content
        overflow: "hidden",
        // Box-shadow used as a border effect
        boxShadow: `
      0 0 10px rgba(255, 255, 255, 0.25), 
      inset 0 0 5px rgba(0, 61, 255, 0.3)
    `,
        // Smooth animation for shadow and scaling
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        // Add a glowing effect with an outer shadow and inner shadow
        e.target.style.boxShadow = `
      0 0 16px rgba(0, 61, 255, 0.5), 
      inset 0 0 8px rgba(0, 61, 255, 0.4)
    `;
        // Slightly enlarge the button
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        // Reset shadow and scaling on hover end
        e.target.style.boxShadow = `
      0 0 10px rgba(255, 255, 255, 0.25), 
      inset 0 0 5px rgba(0, 61, 255, 0.3)
    `;
        e.target.style.transform = "scale(1)";
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
