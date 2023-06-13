import jwt_decode from "jwt-decode";

export const isAuthenticated = (roles) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role) {
    if (role !== roles) {
      return false;
    }

    return true;
  }

  return false;
};
