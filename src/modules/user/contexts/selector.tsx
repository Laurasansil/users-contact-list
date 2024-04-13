import { useContext } from 'react';
import { SelectedUserContext } from './provider';

export const useSelectedUser = () => useContext(SelectedUserContext);
