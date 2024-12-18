import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
console.log("API URL",API_BASE_URL)

// Function to handle the login
export const signIn = async (formData) => {
  try {
    console.log(formData);
    // Send the POST request for login
    const response = await axios.post(
      `{API_BASE_URL}/api/v1/admin/login`,
      {
        email: formData.email,
        password: formData.password,
      }
    );

    // Extract user data from the response
    const userData = {
      username: response.data.data.username,
      email: response.data.data.email,
    };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Return user data
    return userData;
  } catch (error) {
    throw new Error("Error logging in. Please try again.");
  }
};

// api-client.js
export const validateToken = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/admin/get-admin`,
    {
      withCredentials: true,
    }
  );
  console.log("Response",response);

  if (response.status !== 200) {
    throw new Error("Token invalid");
  }

  return response.data; // Return the response data
};
