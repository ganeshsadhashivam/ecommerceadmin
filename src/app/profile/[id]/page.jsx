const UserProfile = ({ params }) => {
  return (
    <div className="bg-black  flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-white">
        <h1>user Profile</h1>
        <span className="p-2 rounded text-black bg-orange-500">
          {params.id}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
