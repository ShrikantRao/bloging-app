import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {withStatusBar} from '../../../../core/utils';
import ProfileCard from './ProfileCard';
import LatestPost from './LatestPost';

function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard />
      <LatestPost />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 12},
});

export default withStatusBar(Dashboard);
