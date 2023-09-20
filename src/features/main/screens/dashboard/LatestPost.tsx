import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function LatestPost() {
  const posts = [
    {
      key: '1',
      body: 'delectus reiciendis molestiae occaecati non minima eveniet qui',
      color: '#c9e4de',
      image: require('../../assets/gluten-free.png'),
    },
    {
      key: '2',
      body: 'reprehenderit quos placeat\nvelit minima officia',
      color: '#faedcb',
      image: require('../../assets/vegan.png'),
    },
    {
      key: '3',
      body: 'itaque id aut magnam\npraesentium quia et ea odit',
      color: '#c6def1',
      image: require('../../assets/gluten.png'),
    },
    {
      key: '4',
      body: 'reprehenderit quos placeat\nvelit minima officia',
      color: '#dbcdf0',
      image: require('../../assets/fox.png'),
    },
    {
      key: '5',
      body: 'delectus reiciendis molestiae occaecati non minima eveniet qui',
      color: '#f2c6de',
      image: require('../../assets/24.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{textAlign: 'center', paddingHorizontal: 8}}>
            Latest Post
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {posts.map((item, index) => (
        <View
          key={item.key}
          style={index % 2 == 0 ? styles.post2 : styles.post1}>
          <View style={styles.imageView}>
            <Image source={item.image} style={styles.profileImg} />
          </View>
          <View style={styles.separator} />
          <View style={[styles.detailView, {backgroundColor: item.color}]}>
            <Text style={styles.title}>{item.body}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'column', marginTop: 16},
  post1: {flexDirection: 'row', marginTop: 8},
  post2: {flexDirection: 'row-reverse', marginTop: 8},
  imageView: {backgroundColor: '#ffffff'},
  profileImg: {resizeMode: 'contain', height: 80, width: 80},
  detailView: {flex: 1, padding: 8},
  title: {textTransform: 'capitalize'},
  separator: {width: 8},
});

export default LatestPost;
