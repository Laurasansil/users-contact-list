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
    return (
      <div className="flex h-screen w-full items-center justify-center content-center">
        Selecione um usuario
      </div>
    );
  }

  return (
    <SelectedUserProvider>
      <div className="flex w-full h-full items-center justify-center content-center">
        <div className="flex bg-light-gray h-full w-full items-center justify-center content-center">
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
