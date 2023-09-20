import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';

import Dashboard from './screens/dashboard/Dashboard';
import Blogs from './screens/blog/Blogs';
import Blog from './screens/blog/Blog';

export enum RouteNames {
  DashboardScreen = 'Dashboard',
  BlogsScreen = 'Blogs',
  BlogScreen = 'Blog',
}

export type NavigatorParamList = {
  [RouteNames.DashboardScreen]: undefined;
  [RouteNames.BlogsScreen]: undefined;
  [RouteNames.BlogScreen]: {
    blogData: any;
  };
};

const HomeNavigator = () => {
  const Drawer = createDrawerNavigator<NavigatorParamList>();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      backBehavior="history">
      <Drawer.Screen name={RouteNames.DashboardScreen} component={Dashboard} />
      <Drawer.Screen name={RouteNames.BlogsScreen} component={Blogs} />
      <Drawer.Screen
        name={RouteNames.BlogScreen}
        component={Blog}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
