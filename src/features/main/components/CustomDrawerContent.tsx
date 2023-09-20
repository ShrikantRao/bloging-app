import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import {StyleSheet, Text, View} from 'react-native';
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

        <View style={styles.dummyMenu}>
          <Text style={styles.dummyMenuItem}>Menu item 1</Text>
          <Text style={styles.dummyMenuItem}>Menu item 2</Text>
          <Text style={styles.dummyMenuItem}>Menu item 3</Text>
          <Text style={styles.dummyMenuItem}>Menu item 4</Text>
          <Text style={styles.dummyMenuItem}>Menu item 5</Text>
        </View>
      </DrawerContentScrollView>
      <Signout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  dummyMenu: {marginHorizontal: 10},
  dummyMenuItem: {marginVertical: 4, borderRadius: 4, padding: 8},
});

export default CustomDrawerContent;
