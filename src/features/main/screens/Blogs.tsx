import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBlogSelector, setBlogs} from '../blogSlice';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Blog, fetchBlogs} from '../../../core/api/blogs';
import {withStatusBar} from '../../../core/utils';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NavigatorParamList, RouteNames} from '../routes';
import {useAuthState} from '../../../core/auth';

export type BlogsScreenProps = DrawerScreenProps<
  NavigatorParamList,
  RouteNames.BlogsScreen
>;

function Blogs({navigation}: BlogsScreenProps) {
  const dispatch = useDispatch();
  const blogsList = useSelector(getBlogSelector);
  const {
    user: {id},
  } = useAuthState();

  useEffect(() => {
    fetchBlogs(id).then(blogs => {
      blogs && dispatch(setBlogs(blogs));
    });
  }, [id, dispatch]);

  const renderItem = ({item}: {item: Blog}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RouteNames.BlogScreen, {blogData: item})
        }
        style={styles.listItem}>
        <Text numberOfLines={1} style={styles.listTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.listBody}>
          {item.body}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={blogsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View style={styles.listVerticalspace} />}
        ListFooterComponent={<View style={styles.listVerticalspace} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  listVerticalspace: {paddingVertical: 4},
  listItem: {
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 8,
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 4,
  },
  listTitle: {fontSize: 14, fontWeight: '400'},
  listBody: {fontSize: 14, color: '#7f7f7f', marginTop: 4},
});

export default withStatusBar(Blogs);
