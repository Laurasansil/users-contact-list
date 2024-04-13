import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { formatDate } from '@/utils';
import { getUserFlag } from '@/modules/user';
import { useSelectedUser } from '@/modules/user';
import Column from '@/components/Column';
import Icon from '@/components/Icon';
import Row from '@/components/Row';
import SecondaryText from '@/components/SecondaryText';
import Text from '@/components/Text';

const UserProfile: React.FC = () => {
  const { selectedUser } = useSelectedUser();
  const navigate = useNavigate();
  const noUserSelected = !selectedUser;
  useEffect(() => {
    if (noUserSelected) {
      navigate(ROUTES.HOME);
    }
  }, []);

  if (noUserSelected) {
    return null;
  }

  return (
    <div className="flex flex-col bg-light-gray h-full w-full">
      <div className="p-10 max-w-4xl">
        <div className="flex shadow-md bg-white rounded-lg p-5 mb-4 mt-2">
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

        <div className="shadow-md bg-white rounded-lg p-5 mb-4 mt-2">
          <Text className="text-xl mb-4">Personal Information</Text>

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
                    src={getUserFlag(selectedUser)}
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
  );
};

export default UserProfile;
