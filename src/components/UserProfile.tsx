import {
  SelectedUserProvider,
  useSelectedUser,
} from "../services/context/SelectedUserContext";
import { format, parseISO } from "date-fns";

import Icon from "./ui/Icon";
import React from "react";
import Text from "./ui/Text";

const UserProfile: React.FC = () => {
  const { selectedUser } = useSelectedUser();
  const loading = !selectedUser;

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, "MMMM dd");
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center content-center">
        Selecione um usuário
      </div>
    );
  }

  return (
    <SelectedUserProvider>
      <div className="flex w-full h-full items-center justify-center content-center">
        <div className="flex flex-col bg-light-gray h-full w-full items-center justify-center content-center">
          <h2>User Profile</h2>
          <img src={selectedUser.picture.large} alt="User avatar" />
          <Text>First Name: {selectedUser.name.first}</Text>
          <Text>Last Name: {selectedUser.name.last}</Text>
          <Text>Email: {selectedUser.email}</Text>
          <Text>Phone: {selectedUser.phone}</Text>
          <Text>Cell: {selectedUser.cell}</Text>
          <div className="flex">
            <Text>Country: {selectedUser.location.country} </Text>
            <Icon
              src={`https://flagsapi.com/${selectedUser.nat}/shiny/64.png`}
              alt={`Small icon representing user's nationality from ${selectedUser.nat}`}
            />
          </div>
          <Text>City: {selectedUser.location.city}</Text>
          <Text>State: {selectedUser.location.state}</Text>
          <Text>PostCode: {selectedUser.location.postcode}</Text>
          <div>
            <Text> Street Address: {selectedUser.location.street.number} </Text>
            {selectedUser.location.street.name}
          </div>
          <Text>Birthday: {formatDate(selectedUser.dob.date)}</Text>
        </div>
      </div>
    </SelectedUserProvider>
  );
};

export default UserProfile;
