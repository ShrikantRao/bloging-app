import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

export const withStatusBar =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <SafeAreaView style={{flex: 1}}>
          <WrappedComponent {...props} />
        </SafeAreaView>
      </>
    );
  };
