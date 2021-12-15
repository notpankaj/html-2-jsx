// login
export const LOGIN_POST = async (payload) => {
  const request = await fetch("http://3.101.35.72:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = request.json();
  return response;
};
// Register
export const REGISTER_POST = async (payload) => {
  const request = await fetch("http://3.101.35.72:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = request.json();
  return response;
};

// getUsers
export const GET_USERS = async (payload) => {
  const request = await fetch("http://3.101.35.72:8080/getUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = request.json();
  return response;
};

// change dashboard access
export const USER_TOGGLE_DASHBOARD_ACCESS = async (payload) => {
  const request = await fetch("http://3.101.35.72:8080/activateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = request.json();
  return response;
};
