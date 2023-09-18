import {ReactNode} from 'react';
import {User} from '../api';

export interface AuthState {
  isInitialised: boolean;
  isAuthorized: boolean;
  user: User | undefined;
}

export interface AuthContextValue {
  state: AuthState;
  signIn: (userId: number) => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children?: ReactNode;
}
