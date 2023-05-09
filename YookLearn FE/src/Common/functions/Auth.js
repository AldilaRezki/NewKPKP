import jwt_decode from "jwt-decode";

export const isAuthenticated = (roles) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role) {
    // // decode token dan memeriksa apakah token valid
    // const decodedToken = jwt_decode(token);

    // if (decodedToken.exp < Date.now() / 1000) {
    //   // token kadaluarsa
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('role');

    //   return false;
    // }

    // memeriksa role pengguna
    if (role !== roles) {
      return false;
    }

    return true;
  }

  return false;
};
