import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useAuthContext} from '../../../../core/auth';

function ProfileCard() {
  const authContext = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.profileImg}
        />
      </View>

      <View style={styles.detailView}>
        <Text style={styles.title}>{authContext.state.user?.name}</Text>
        <Text style={styles.text}>{authContext.state.user?.email}</Text>
        <Text style={styles.text}>{authContext.state.user?.phone}</Text>
        <Text style={styles.text}>{authContext.state.user?.address?.city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#EBF4FF',
    borderWidth: 1,
    borderColor: '#462470',
    borderRadius: 4,
  },
  imageView: {backgroundColor: '#ffffff'},
  profileImg: {resizeMode: 'contain', height: 120, width: 120},
  detailView: {flex: 1, marginLeft: 8},
  title: {fontSize: 16, fontWeight: '400'},
  text: {fontSize: 14, marginTop: 8},
});
export default ProfileCard;
