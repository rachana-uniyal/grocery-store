import React from 'react';
import { FlatList, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './imageSlider.style'
import { icons } from '../../constants';
import { useFavorites } from '../../context/FavoriteContext';

const { width } = Dimensions.get('window');
const style = styles(width)

const ImageSlider = ({ images ,id}) => {

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoritePress = () => {
      if (isFavorite(id)) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    };

  const renderItem = ({ item }) => (
    <View style={style.imageWrapper}>
      <TouchableOpacity style={style.heartContainer} onPress={handleFavoritePress}>
        {console.log("id",id)}
        {isFavorite(id) ?
          <Image source={icons.pinkheart} style={style.favIcon}/>:
          <Image source={icons.vector} style={style.favIcon}/>
         }
        </TouchableOpacity>
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
