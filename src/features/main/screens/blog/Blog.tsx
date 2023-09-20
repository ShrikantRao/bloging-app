import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLongArrowLeft} from '@fortawesome/free-solid-svg-icons/faLongArrowLeft';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faFloppyDisk} from '@fortawesome/free-solid-svg-icons/faFloppyDisk';

import {withStatusBar} from '../../../../core/utils';
import {NavigatorParamList, RouteNames} from '../../routes';

export type BlogScreenProps = DrawerScreenProps<
  NavigatorParamList,
  RouteNames.BlogScreen
>;

function Blog({route, navigation}: BlogScreenProps) {
  const [editable, setEditable] = useState(false);

  const {blogData} = route.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigateBack = useCallback(() => {
    setEditable(() => false);
    navigation.goBack();
  }, [navigation]);

  const editConfirmation = useCallback(
    () =>
      Alert.alert('Edit Blog', 'Sure want to save changes?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: navigateBack},
      ]),
    [navigateBack],
  );

  const leftButton = useCallback(
    () => (
      <Pressable onPress={navigateBack} style={styles.navIcons}>
        <FontAwesomeIcon icon={faLongArrowLeft} size={20} />
      </Pressable>
    ),
    [navigateBack],
  );

  const rightButton = useCallback(() => {
    return !editable ? (
      <Pressable
        onPress={() => setEditable(prev => !prev)}
        style={styles.navIcons}>
        <FontAwesomeIcon icon={faEdit} size={20} />
      </Pressable>
    ) : (
      <Pressable onPress={editConfirmation} style={styles.navIcons}>
        <FontAwesomeIcon icon={faFloppyDisk} size={20} />
      </Pressable>
    );
  }, [editable, editConfirmation]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: leftButton,
      headerRight: rightButton,
    });
  }, [navigation, leftButton, rightButton]);

  useEffect(() => {
    setTitle(blogData.title);
    setBody(blogData.body);
  }, [blogData]);

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        editable={editable}
        multiline={true}
        numberOfLines={8}
        style={[styles.listTitle, editable && styles.listEditable]}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        editable={editable}
        multiline={true}
        numberOfLines={8}
        style={[styles.listBody, editable && styles.listEditable]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },

  listTitle: {fontSize: 16, fontWeight: '400', padding: 8},
  listBody: {fontSize: 14, color: '#7f7f7f', padding: 8, marginTop: 8},
  listEditable: {borderColor: '#c6c6c6', borderWidth: 1, borderRadius: 4},
  navIcons: {paddingHorizontal: 16, paddingVertical: 8},
});
export default withStatusBar(Blog);
