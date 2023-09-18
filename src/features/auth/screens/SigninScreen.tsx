import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
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
      <Button
        testID="signin-button"
        onPress={handleSignInPress}
        title="Sign In"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default withStatusBar(SignInScreen);
