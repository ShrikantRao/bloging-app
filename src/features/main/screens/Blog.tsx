import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {withStatusBar} from '../../../core/utils';
import {NavigatorParamList, RouteNames} from '../routes';

export type BlogScreenProps = DrawerScreenProps<
  NavigatorParamList,
  RouteNames.BlogScreen
>;

function Blog({route}: BlogScreenProps) {
  const {blogData} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{blogData.title}</Text>
      <Text style={styles.listBody}>{blogData.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 12,
  },

  listTitle: {fontSize: 16, fontWeight: '400'},
  listBody: {fontSize: 14, color: '#7f7f7f', marginTop: 8},
});
export default withStatusBar(Blog);
