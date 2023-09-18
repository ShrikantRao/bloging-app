import React, {useState} from 'react';

import {AuthContext} from './AuthContext';
import {AuthProviderProps} from './types';

import {User, fetchUser} from '../api/user';

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isInitialised] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const signIn = async (userId: number) => {
    try {
      const result = await fetchUser(userId);
      setUser(result);
      setIsAuthorized(true);
    } catch (e) {
      setIsAuthorized(false);
    }
  };

  const signOut = () => {
    setIsAuthorized(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        state: {
          isInitialised,
          isAuthorized,
          user,
        },
        signIn,
        signOut,
      }}>
      <>{children === undefined ? null : children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
