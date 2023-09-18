import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSignOut} from '../../../core/auth';

function Signout() {
  const signOut = useSignOut();

  const handleSignOutPress = () => {
    signOut();
  };

  return (
    <View style={styles.drawerView}>
      <Pressable onPress={handleSignOutPress} style={styles.drawerItem}>
        <Text style={styles.drawerText}>Signout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerView: {
    marginBottom: 30,
  },
  drawerItem: {
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 4,
    padding: 8,
  },
  drawerText: {
    fontWeight: '500',
    color: 'lightgray',
  },
});

export default Signout;
