import React, { useEffect, useState } from "react";

import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import SearchBar from "../components/SearchBar";
import Text from "../components/ui/Text";
import UserProfile from "../components/UserProfile";
import { UserProfileInfo } from "../services/utils/types";
import { fetchUsers } from "../services/api/api";
import { useNavigate } from "react-router-dom";
import { useSelectedUser } from "../services/context/SelectedUserContext";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserProfileInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [originalUsers, setOriginalUsers] = useState<UserProfileInfo[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  const { setSelectedUser } = useSelectedUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedUsers = localStorage.getItem("cachedUsers");

        if (cachedUsers) {
          const parsedUsers = JSON.parse(cachedUsers);
          setUsers(parsedUsers);
          setOriginalUsers(parsedUsers);
        } else {
          const response = await fetchUsers(100);
          setUsers(response);
          setOriginalUsers(response);
          // caching on localstorage
          localStorage.setItem("cachedUsers", JSON.stringify(response));
        }
      } catch (error) {
        // future error treatment
      }
    };
    fetchData();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = originalUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    const noResultsFound = filteredUsers.length === 0;

    setUsers(filteredUsers);
    return noResultsFound;
  };

  const usersPerPage = 20;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleClickUser = (user: UserProfileInfo) => {
    console.log(user);
    navigate(`/profile/${user.login.uuid}`, {
      preventScrollReset: true,
      state: { user },
    });
    setSelectedUser(user);
    setSelectedUserId(user.login.uuid);
  };

  return (
    <div className="flex w-full h-full bg-gray-100 ">
      <div className="w-128">
        <div className="w-full h-full">
          <div className="flex flex-col bg-white h-full p-6 justify-between">
            <SearchBar onSearch={handleSearch} />
            <ul>
              {currentUsers.map((user, index) => (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleClickUser(user)}
                >
                  <div
                    className={`flex items-center text-lg mb-2 rounded-lg  ${
                      user.login.uuid === selectedUserId
                        ? "bg-light-gray p-1"
                        : ""
                    }`}
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
                      src={`https://flagsapi.com/${user.nat}/shiny/64.png`}
                      alt={`Small icon representing users naturalitie from ${user.nat}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex w-full justify-between">
              {currentPage > 1 && (
                <Button onClick={handlePrevPage} label="BACK" />
              )}
              {currentPage < totalPages && (
                <Button onClick={handleNextPage} label="NEXT" />
              )}
            </div>
          </div>
        </div>
      </div>
      <UserProfile />
    </div>
  );
};

export default Home;
