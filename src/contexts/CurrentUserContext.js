import React, { useCallback } from 'react';
import API from '../APIClient';
import { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import history from '../history';

export const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
  const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [loadingProfile, setLoadingProfile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState(null);
  const isLoggedIn = !!profile;

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

  const logout = async () => {
    try {
      await API.get('/auth/logout');
      addToast('Vous vous êtes déconnecté !', {
        appearance: 'success',
      });
      setProfile(undefined);
      history.push('/');
    } catch (err) {
      addToast('Impossible de se déconnecter !', {
        appearance: 'error',
      });
    }
  };

  const getProfile = async () => {
    setLoadingProfile(true);
    let data = null;
    try {
      data = await API.get('/currentUser').then((res) => res.data);
      console.log('data    ', data);
      setProfile(data);
    } catch (err) {
      window.console.error(err);
      return data;
    }
  };
  return (
    <CurrentUserContext.Provider
      value={{
        createProfile,
        getProfile,
        profile,
        login,
        isLoggedIn,
        profile,
        logout,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
