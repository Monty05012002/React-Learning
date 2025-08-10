import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  // 3. Consume context value
  const user = useContext(UserContext);

  return (
    <div className="card">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
