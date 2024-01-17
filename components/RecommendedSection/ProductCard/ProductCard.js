import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./productCard.style";
import { icons } from "../../../constants";

const ProductCard = ({title, thumbnail, price, handleNavigate}) =>{

    
    return(
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
             <TouchableOpacity >
                <Image source={icons.vector} style={styles.heartIcon}/>
             </TouchableOpacity>
            
            <Image source ={{ uri: thumbnail }}  style={styles.productImg} />

            <View style={styles.productInfoContainer}>
                <View style={styles.priceWrapper}>
                    <Text style={styles.priceText}>${price}</Text>
                    <View style={styles.addToCart}><Text style={styles.addToCartText}>+</Text></View>
                </View>
                <Text style={styles.titleText}>{title}</Text>
                
            </View>    
        </TouchableOpacity>
    )
}

export default ProductCard;