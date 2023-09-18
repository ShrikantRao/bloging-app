import React from 'react';
import {Image, StyleSheet, Pressable, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';

function QDBHeader({navigation}: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/qdb_logo.png')} style={styles.logo} />
      <Pressable
        style={styles.pressableIcon}
        onPress={() => navigation.closeDrawer()}>
        <FontAwesomeIcon icon={faClose} style={styles.icon} size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#462470',
    justifyContent: 'space-between',
  },
  logo: {resizeMode: 'contain', height: 50, width: 100, marginLeft: 8},
  pressableIcon: {width: 50, alignItems: 'center', justifyContent: 'center'},
  icon: {
    color: '#fff',
  },
});

export default QDBHeader;
