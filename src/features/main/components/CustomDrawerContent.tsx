import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {StyleSheet, View} from 'react-native';
import QDBHeader from './QDBHeader';
import Profile from './Profile';
import Signout from './Signout';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <QDBHeader {...props} />
        <Profile />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Signout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
});

export default CustomDrawerContent;
