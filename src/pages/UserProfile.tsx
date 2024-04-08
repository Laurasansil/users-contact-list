// UserProfile.tsx
import React from "react";
import { useSelectedUser } from "../services/context/SelectedUserContext";

const UserProfile: React.FC = () => {
  const { selectedUser } = useSelectedUser();

  if (!selectedUser) {
    return <div>Please select a user.</div>;
  }

  // Renderizar o perfil do usuário selecionado
  return (
    <div className="flex justify-center content-center ">
      <h2>User Profile</h2>
      <div>
        Name: {selectedUser.name.first} {selectedUser.name.last}
      </div>
      <div>Email: {selectedUser.email}</div>
      {/* Renderizar mais informações do perfil se necessário */}
    </div>
  );
};

export default UserProfile;
