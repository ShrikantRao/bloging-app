import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLongArrowLeft} from '@fortawesome/free-solid-svg-icons/faLongArrowLeft';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';

import {withStatusBar} from '../../../core/utils';
import {NavigatorParamList, RouteNames} from '../routes';

export type BlogScreenProps = DrawerScreenProps<
  NavigatorParamList,
  RouteNames.BlogScreen
>;

function Blog({route, navigation}: BlogScreenProps) {
  const {blogData} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.navIcons}>
          <FontAwesomeIcon icon={faLongArrowLeft} size={20} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.navIcons}>
          <FontAwesomeIcon icon={faEdit} size={20} />
        </Pressable>
      ),
    });
  }, [navigation]);

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

  listTitle: {fontSize: 16, fontWeight: '400', textTransform: 'capitalize'},
  listBody: {fontSize: 14, color: '#7f7f7f', marginTop: 8},
  navIcons: {paddingHorizontal: 16, paddingVertical: 8},
});
export default withStatusBar(Blog);
