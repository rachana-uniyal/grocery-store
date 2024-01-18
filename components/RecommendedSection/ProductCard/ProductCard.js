import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./productCard.style";
import { icons } from "../../../constants";

const ProductCard = ({title, thumbnail, price, handleNavigate}) =>{

    const router = useRouter()
    
    return(
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
             <TouchableOpacity >
                <Image source={icons.vector} style={styles.heartIcon}/>
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
}

export default ProductCard;