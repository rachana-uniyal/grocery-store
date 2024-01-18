import React from 'react';
import { FlatList, View, Image, Dimensions } from 'react-native';
import styles from './productDetails.style';
import { icons } from '../../constants';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <View style={styles.heartContainer}>
        <Image source={icons.heart}/>
        </View>
      <Image source={{ uri: item }} style={{ width, height: 207 }} resizeMode="contain" />
    </View>
  );

  return (
    <FlatList
      style={styles.ImgSliderContainer}
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ImageSlider;
