import { View,Text, Image, TouchableOpacity, SafeAreaView,ScrollView } from "react-native";
import { useGlobalSearchParams } from "expo-router"
import useFetch from "../../hook/useFetch";
import styles from "./productDetails.style";
import { icons } from "../../constants";
import ImageSlider from "./ImageSlider";

const ProductDetails = () =>{
    const params = useGlobalSearchParams()
    const { data, isLoading, error } = useFetch(params?.id, null);
    console.log(data)

    return(<SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Image source={icons.backarrow}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.bagblack} style={styles.bagIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{data.title}</Text>
            </View>
            <View style={styles.ratingReviewContainer}>
                <Image source={icons.stars}/>
                <Text>110 Reviews</Text>
            </View>
            <ImageSlider images={data.images}/>
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${data.price}</Text>
                <View style={styles.discountWrapper}>
                    <Text style={styles.discountText}>${data.discountPercentage} OFF</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.addToCartBtnText}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buyNowBtn]}>
                    <Text style={styles.buyNowBtnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.detailText}>Details</Text>
                <Text style={[styles.descriptionText, styles.detailText]}>{data.description}</Text>
            </View>
            </ScrollView>
        </SafeAreaView>)
}

export default ProductDetails;