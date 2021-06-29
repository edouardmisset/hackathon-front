import React from 'react';
import API from '../APIClient';
import { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
  const { addToast } = useToasts();
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [profile, setProfile] = useState();

  const createProfile = async (form) => {
    try {
      await API.post('/user', form);
      addToast('Votre compte a été créé avec succès', {
        appearance: 'success',
      });
    } catch (err) {
      addToast('Il y a eu une erreur lors de la création de votre compte.', {
        appearance: 'error',
      });
    }
  };
  const login = async ({ email, password }) => {
    try {
      await API.post('/auth/login', { email, password });
      addToast('Connexion réussie !', {
        appearance: 'success',
      });
      getProfile();
    } catch (err) {
      if (err.response && err.response.status === 401) {
        addToast('Email ou mot de passe incorrect !', {
          appearance: 'error',
        });
      } else window.console.error(err);
    }
  };

  const getProfile = async () => {
    setLoadingProfile(true);
    let data = null;
    try {
      data = await API.get('/currentUser').then((res) => res.data);
      setProfile(data);
    } catch (err) {
      window.console.error(err);
      return data;
    }
  }
  return (
    <CurrentUserContext.Provider
      value={{
        createProfile,
        getProfile,
        login
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
