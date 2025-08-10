import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { id } = useParams(); // Extract ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Runs whenever the ID changes

  if (loading) return <p>⏳ Loading user...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div>
      <h2>👤 {user.name}</h2>
      <p>📧 Email: {user.email}</p>
      <p>🏙 City: {user.address.city}</p>
      <p>📞 Phone: {user.phone}</p>
    </div>
  );
}
