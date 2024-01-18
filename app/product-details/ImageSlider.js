import React from 'react';
import { FlatList, View, Image, Dimensions } from 'react-native';
import styles from './imageSlider.style'
import { icons } from '../../constants';

const { width } = Dimensions.get('window');
const style = styles(width)

const ImageSlider = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={style.imageWrapper}>
      <View style={style.heartContainer}>
        <Image source={icons.heart}/>
        </View>
      <Image source={{ uri: item }} style={style.image} />
    </View>
  );

  return (
    <FlatList
      style={style.ImgSliderContainer}
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
