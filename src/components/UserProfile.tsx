import {
  SelectedUserProvider,
  useSelectedUser,
} from "../services/context/SelectedUserContext";

import React from "react";

const UserProfile: React.FC = () => {
  const { selectedUser } = useSelectedUser();
  console.log("profile", selectedUser);

  const loading = !selectedUser;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SelectedUserProvider>
      <div className="flex justify-center content-center h-full">
        <div className="bg-blue-600">
          <h2>User Profile</h2>
          <div>
            Name: {selectedUser.name.first} {selectedUser.name.last}
          </div>
          <div>Email: {selectedUser.email}</div>
        </div>
      </div>
    </SelectedUserProvider>
  );
};

export default UserProfile;
