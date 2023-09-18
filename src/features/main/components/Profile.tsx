import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useAuthContext} from '../../../core/auth';

function Profile() {
  const authContext = useAuthContext();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile-circle.png')}
        style={styles.logo}
      />
      <View style={styles.profileView}>
        <Text style={styles.txtHello}>Hello</Text>
        <Text style={styles.profileName}>{authContext.state.user?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    backgroundColor: '#EBF4FF',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {resizeMode: 'contain', height: 120, width: 120},
  profileView: {alignItems: 'center'},
  txtHello: {fontSize: 14, color: 'gray'},
  profileName: {fontSize: 16, color: 'black'},
});

export default Profile;
