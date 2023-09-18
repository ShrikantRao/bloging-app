import {useContext} from 'react';
import AuthContext, {initialAuthState} from './AuthContext';

export const useAuthContext = () => useContext(AuthContext);

export const useAuthState = () => {
  const authContext = useAuthContext();
  return authContext ? authContext.state : initialAuthState;
};

export const useSignIn = () => {
  const authContext = useAuthContext();
  return authContext ? authContext.signIn : () => {};
};

export const useSignOut = () => {
  const authContext = useAuthContext();
  return () => {
    authContext && authContext.signOut();
  };
};
