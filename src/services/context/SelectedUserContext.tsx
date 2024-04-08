// SelectedUserContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

import { UserProfileInfo } from "../utils/types";

interface SelectedUserContextType {
  selectedUser: UserProfileInfo | null;
  setSelectedUser: (user: UserProfileInfo | null) => void;
}

const SelectedUserContext = createContext<SelectedUserContextType>({
  selectedUser: null,
  setSelectedUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedUser = () => useContext(SelectedUserContext);

export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = useState<UserProfileInfo | null>(
    null
  );

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
