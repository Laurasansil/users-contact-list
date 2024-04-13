import { PropsWithChildren, createContext, useState } from 'react';

import { User } from '../types';

type SelectedUserContextType = {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
};

export const SelectedUserContext = createContext<SelectedUserContextType>({
  selectedUser: null,
  setSelectedUser: () => {},
});

export function SelectedUserProvider({ children }: PropsWithChildren<{}>) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
}
