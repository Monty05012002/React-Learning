import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Click a user to view their profile:</p>
      <Link to="/user/1">User 1</Link> <br />
      <Link to="/user/2">User 2</Link> <br />
      <Link to="/user/3">User 3</Link>
    </div>
  );
}
