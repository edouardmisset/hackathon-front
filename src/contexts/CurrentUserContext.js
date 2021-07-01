import API from '../APIClient';
import { createContext, useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import history from '../history';

export const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
  const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [loadingProfile, setLoadingProfile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userEventList, setUserEventList] = useState([]);

  const getUserEvents = async () => {
    try {
      const { data } = await API.get(`/users/${profile.id}/events`);
      console.log(data);
      setUserEventList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createProfile = async (form) => {
    try {
      await API.post('/users', form);
      addToast('Votre compte a été créé avec succès', {
        appearance: 'success',
      });
      setTimeout(() => {
        history.push('/login');
      }, 500);
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
      await getProfile();
      console.log(profile);
      getUserEvents();
      setTimeout(() => {
        history.push('/');
      }, 500);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        addToast('Email ou mot de passe incorrect !', {
          appearance: 'error',
        });
      } else window.console.error(err);
    }
  };

  console.log(profile);
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
      setProfile(data);
      setIsLoggedIn(true);
    } catch (err) {
      window.console.error(err);
      return data;
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        createProfile,
        getProfile,
        profile,
        login,
        isLoggedIn,
        logout,
        userEventList,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
