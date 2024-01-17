import { View,Text, Image } from "react-native";
import { useGlobalSearchParams } from "expo-router"
import useFetch from "../../hook/useFetch";
import styles from "./productDetails.style";
import { icons } from "../../constants";

const ProductDetails = () =>{
    const params = useGlobalSearchParams()
    const { data, isLoading, error } = useFetch(params?.id, null);
    console.log(data)

    return(<View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{data.title}</Text>
            </View>
            <View style={styles.ratingReviewContainer}>
                <Image source={icons.stars}/>
                <Text>110 Reviews</Text>
            </View>
        </View>)
}

export default ProductDetails;