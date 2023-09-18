import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withStatusBar} from '../../../core/utils';

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default withStatusBar(Dashboard);
