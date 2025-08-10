import { useEffect, useState } from "react";

function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // 🔁 Fetch user data once when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initially show all users
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // 🔍 Filter users every time searchTerm changes
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchTerm, users]);

  return (
    <div className="container my-4">
      <h2>🔍 Search Users</h2>

      <input
        type="text"
        placeholder="Search by name"
        className="form-control my-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="list-group">
        {filteredUsers.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
