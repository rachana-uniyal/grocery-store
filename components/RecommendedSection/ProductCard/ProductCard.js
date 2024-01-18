import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./productCard.style";
import { icons } from "../../../constants";
import { useFavorites } from "../../../context/FavoriteContext";

const ProductCard = React.memo(({id,title, thumbnail, price, handleNavigate}) =>{
    console.log("productcard",id)
    const router = useRouter()
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavoritePress = (e) => {
        e.stopPropagation()
        if (isFavorite(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      };
    
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
                    <TouchableOpacity style={styles.addToCart}  onPress={() => router.push('/cart')}>
                        <Text style={styles.addToCartText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleText}>{title}</Text>
                
            </View>    
        </TouchableOpacity>
    )
})

export default ProductCard;