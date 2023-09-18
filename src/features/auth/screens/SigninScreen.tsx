import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {withStatusBar} from '../../../core/utils';
import {useSignIn} from '../../../core/auth';

const SignInScreen = () => {
  const signIn = useSignIn();

  const handleSignInPress = () => {
    const randomUserId = Math.round(1 + Math.random() * 9);
    signIn(randomUserId);
  };

  return (
    <View style={styles.container}>
      <Pressable
        testID="signin-button"
        onPress={handleSignInPress}
        style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  signInButton: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#5C187C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {color: '#ffffff', fontSize: 16, fontWeight: '600'},
});

export default withStatusBar(SignInScreen);
