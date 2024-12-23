export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode token payload
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return payload.exp < currentTime; // Check if token is expired
  } catch (error) {
    console.error("Invalid token format:", error);
    return true;
  }
};
