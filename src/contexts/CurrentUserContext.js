import React from 'react'
import API from '../APIClient';
import { createContext } from 'react';
import { useToasts } from 'react-toast-notifications';

export const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
  const { addToast } = useToasts();
  const createProfile = async (form) => {
    try {
      await API.post('/user', form);
      addToast("Votre compte a été créé avec succès", {
        appearance: 'success',
      });
    } catch (err) {
      addToast('Il y a eu une erreur lors de la création de votre compte.', {
        appearance: 'error',
      });
    }
  };
  return (
    <CurrentUserContext.Provider
      value={{
        createProfile,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}
