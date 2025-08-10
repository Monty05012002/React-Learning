// export async function fetchUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }
// import axios from "axios";

// // Create a reusable Axios instance
// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com", // Base URL
//   timeout: 5000, // Timeout after 5 seconds
// });

// export async function fetchUsers() {
//   try {
//     const response = await api.get("/users");
//     return response.data; // Axios stores response body in `.data`
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status other than 2xx
//       throw new Error(`Error ${error.response.status}: ${error.response.statusText}`);
//     } else if (error.request) {
//       // Request was made but no response received
//       throw new Error("No response from server");
//     } else {
//       // Something else went wrong
//       throw new Error(error.message);
//     }
//   }
// }


import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export function fetchUsers(cancelToken) {
  return api.get("/users", { cancelToken })
    .then((res) => res.data)
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
        return [];
      }
      throw error;
    });
}
