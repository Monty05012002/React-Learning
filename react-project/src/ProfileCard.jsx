// ProfileCard.jsx
function ProfileCard({ name, age, country, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Profile" width="150" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default ProfileCard;
