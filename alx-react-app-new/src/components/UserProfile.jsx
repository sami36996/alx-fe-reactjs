function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#333' }}>{name}</h2>
      <p>
        Age: <span style={{ color: 'blue', fontSize: '10px' }}>{age}</span>
      </p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
