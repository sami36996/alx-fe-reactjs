function UserProfile() {
  const user = {
    name: 'Samuel',
    age: 18,
    bio: 'Aspiring full-stack developer currently learning React.',
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '9px',
        padding: '19px',
        maxWidth: '299px',
        margin: '19px auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#333' }}>{user.name}</h2>
      <p style={{ fontSize: '13px', margin: '5px 0' }}>Age: {user.age}</p>
      <p style={{ color: '#554' }}>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
