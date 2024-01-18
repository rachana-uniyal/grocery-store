import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./productCard.style";
import { icons } from "../../../constants";
import { useFavorites } from "../../../context/FavoriteContext";
import { useCart } from '../../../context/CartContext';

const ProductCard = React.memo(({id,title, thumbnail, price, handleNavigate}) =>{

    const { addToCart} = useCart()
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavoritePress = () => {
        if (isFavorite(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      };

    const handleAddPress = () =>{
        addToCart({id,title,thumbnail,price})
    }
    
    return(
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
             <TouchableOpacity onPress={handleFavoritePress}>
                { isFavorite(id) ?
                <Image source={icons.pinkheart} style={styles.heartIcon}/>:
                <Image source={icons.vector} style={styles.heartIcon}/>
                }
             </TouchableOpacity>
            
            <Image source ={{ uri: thumbnail }}  style={styles.productImg} />

            <View style={styles.productInfoContainer}>
                <View style={styles.priceWrapper}>
                    <Text style={styles.priceText}>${price}</Text>
                    <TouchableOpacity style={styles.addToCart} onPress={handleAddPress}>
                        <Text style={styles.addToCartText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleText}>{title}</Text>
                
            </View>    
        </TouchableOpacity>
    )
})

export default ProductCard;