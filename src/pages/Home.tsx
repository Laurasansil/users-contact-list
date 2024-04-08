import React, { useEffect, useState } from "react";
import {
  SelectedUserProvider,
  useSelectedUser,
} from "../services/context/SelectedUserContext";

import Button from "../components/ui/Button";
import UserProfile from "./UserProfile";
import { UserProfileInfo } from "../services/utils/types";
import { fetchUsers } from "../services/api/api";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserProfileInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { setSelectedUser } = useSelectedUser();

  const navigate = useNavigate();

  const handleClickUser = (user: UserProfileInfo) => {
    setSelectedUser(user);
    navigate(`/profile/${user.login.uuid}`);
    console.log("cliquei");
  };

  const usersPerPage = 20;

  const totalPages = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedUsers = localStorage.getItem("cachedUsers");

        if (cachedUsers) {
          setUsers(JSON.parse(cachedUsers));
        } else {
          const response = await fetchUsers(100);
          setUsers(response);

          // caching on localstorage
          localStorage.setItem("cachedUsers", JSON.stringify(response));
        }
      } catch (error) {
        // future error treatment
      }
    };
    fetchData();
  }, []);
  console.log(users);

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

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <SelectedUserProvider>
      <div className="flex w-full h-full bg-gray-100 ">
        <div className="w-1/5">
          <div className="w-full h-full">
            <div className="flex flex-col bg-white h-full p-6 justify-between">
              <div className="">Search</div>
              <ul>
                {currentUsers.map((user, index) => (
                  <li
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleClickUser(user)}
                  >
                    <span className="text-lg">
                      {user.name.first} {user.name.last}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex w-full justify-between">
                {currentPage > 1 && (
                  <Button onClick={handlePrevPage} label="Back" />
                )}
                {currentPage < totalPages && (
                  <Button onClick={handleNextPage} label="Next" />
                )}
              </div>
            </div>
          </div>
        </div>
        <UserProfile />
      </div>
    </SelectedUserProvider>
  );
};

export default Home;
