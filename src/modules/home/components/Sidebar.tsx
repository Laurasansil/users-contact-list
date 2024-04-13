import React, { useMemo, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { User, filterByName, useUsers, getUserFlag } from '@/modules/user';
import { useSelectedUser } from '@/modules/user';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

import SearchBar from './SearchBar';
import { ROUTES } from '@/constants';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data: users = [], isLoading } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { setSelectedUser } = useSelectedUser();

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleClickUser = (user: User) => () => {
    navigate(
      // Note: Use this helper to generate routes from constant paths
      generatePath(ROUTES.PROFILE, {
        uuid: user.login.uuid,
      }),
    );

    setSelectedUser(user);
    setSelectedUserId(user.login.uuid);
  };

  const filteredUsers = useMemo(
    () => users.filter(filterByName(searchTerm)),
    [searchTerm, users],
  );

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col h-screen">
        <div className="mb-2 py-4 px-3">
          <SearchBar onSearch={handleSearch} />
        </div>
        <ul className="grow overflow-y-scroll">
          {/* Note: Skeleton loading */}
          {isLoading &&
            Array.from(Array(100).keys()).map((_, i) => (
              <li
                key={i}
                className="w-full flex items-center rounded-lg p-1 text-lg cursor-pointer animate-pulse"
              >
                <div className="w-8 h-8 rounded-full ml-2 bg-slate-200"></div>
                <div className="h-5 ml-3 flex-grow bg-slate-200 rounded"></div>
                <div className="h-5 w-8 ml-1 bg-slate-200 rounded"></div>
              </li>
            ))}

          {filteredUsers.map((user, index) => (
            <li
              key={index}
              className={classNames(
                'w-full flex items-center rounded-lg p-1 text-lg cursor-pointer',
                'hover:bg-light-gray',
                // Note: classNames helper simplify classname manipulation
                { 'bg-gray-300': user.login.uuid === selectedUserId },
              )}
              onClick={handleClickUser(user)}
            >
              <img
                className="rounded-full w-8 h-8 ml-2"
                src={user.picture.thumbnail}
                alt={`Profile picture `}
              />

              <Text className="ml-3 flex-grow text-dark font-medium">
                {user.name.first} {user.name.last}
              </Text>

              <Icon
                src={getUserFlag(user)}
                alt={`Small icon representing users naturality from ${user.nat}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
