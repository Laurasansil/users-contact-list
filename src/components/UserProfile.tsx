import {
  SelectedUserProvider,
  useSelectedUser,
} from "../services/context/SelectedUserContext";
import { format, parseISO } from "date-fns";

import Column from "./ui/Column";
import Icon from "./ui/Icon";
import React from "react";
import Row from "./ui/Row";
import SecondaryText from "./ui/SecondaryText";
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
        <div className="flex flex-col bg-light-gray h-full w-full p-10 ">
          <div className="bg-white p-10 rounded-lg max-w-4xl ">
            <Text className="text-2xl text-dark">Profile</Text>
            <div className="flex shadow-md bg-white  rounded-lg p-5 mb-4 mt-2">
              <img
                src={selectedUser.picture.large}
                alt="User avatar"
                className="rounded-full mr-5"
              />
              <div className="flex flex-col justify-center content-center">
                <Text className="text-xl">
                  {selectedUser.name.first} {selectedUser.name.last}
                </Text>
                <Text className="text-gray-400 ">{selectedUser.email}</Text>
              </div>
            </div>

            <div className="shadow-md bg-white  rounded-lg p-5 mb-4 mt-2">
              <Text className="text-xl mb-4  ">Personal Information</Text>

              <div>
                <Row>
                  <Column>
                    <SecondaryText>First Name</SecondaryText>
                    {selectedUser.name.first}
                  </Column>

                  <Column>
                    <SecondaryText>Last Name</SecondaryText>
                    {selectedUser.name.last}
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <SecondaryText>Phone</SecondaryText>
                    <Text>{selectedUser.phone}</Text>
                  </Column>
                  <Column>
                    <SecondaryText>Cell</SecondaryText>
                    <Text>{selectedUser.cell}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <SecondaryText>Nationality</SecondaryText>
                    <Row>
                      <Text> {selectedUser.nat}</Text>
                      <Icon
                        src={`https://flagsapi.com/${selectedUser.nat}/shiny/64.png`}
                        alt={`Small icon representing user's nationality from ${selectedUser.nat}`}
                      />
                    </Row>
                  </Column>
                  <Column>
                    <SecondaryText>Birthday</SecondaryText>
                    <Text> {formatDate(selectedUser.dob.date)}</Text>
                  </Column>
                </Row>
              </div>
            </div>

            <div className="shadow-md bg-white rounded-lg p-5 mb-4 mt-2">
              <Row>
                <Column>
                  <SecondaryText>Country </SecondaryText>
                  <Text>{selectedUser.location.country} </Text>
                </Column>

                <Column>
                  <SecondaryText>City / State</SecondaryText>
                  <Text>
                    {selectedUser.location.city} / {selectedUser.location.state}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <SecondaryText>Postal Code</SecondaryText>
                  <Text>{selectedUser.location.postcode}</Text>
                </Column>

                <Column>
                  <SecondaryText> Street</SecondaryText>
                  <Row>
                    <Text>{selectedUser.location.street.number}</Text>,
                    <Text>{selectedUser.location.street.name}</Text>
                  </Row>
                </Column>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </SelectedUserProvider>
  );
};

export default UserProfile;
