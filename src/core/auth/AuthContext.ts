import {createContext} from 'react';
import {AuthContextValue} from './types';

export const initialAuthState = {
  isInitialised: false,
  isAuthorized: false,
  user: undefined,
};

export const AuthContext = createContext<AuthContextValue>({
  state: initialAuthState,
  signIn: () => {},
  signOut: () => {},
});

export default AuthContext;
