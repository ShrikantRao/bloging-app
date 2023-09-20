import React from 'react';
import {useAuthState} from '../../core/auth';
import AuthNavigator from '../auth/routes';
import HomeNavigator from '../main/routes';

const RootNavigator = () => {
  const {isAuthorized} = useAuthState();

  if (isAuthorized) {
    return <HomeNavigator />;
  }

    // return <HomeNavigator />;
    return <AuthNavigator />;
};

export default RootNavigator;
