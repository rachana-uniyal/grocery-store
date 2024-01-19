import { View,Text, Image, TouchableOpacity, SafeAreaView,ScrollView, ActivityIndicator } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router"
import useFetch from "../../hook/useFetch";
import styles from "./productDetails.style";
import { icons, COLORS } from "../../constants";
import ImageSlider from "./ImageSlider";
import { useCart } from "../../context/CartContext";

const ProductDetails = () =>{
    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error } = useFetch(params?.id, null);

    const { addToCart,cart } = useCart()

    const handleAddPress = () =>{
        if(data){
            const {id,title,thumbnail,price} = data
            addToCart({id,title,thumbnail,price})
        }
        
    }

    return(<SafeAreaView style={styles.container}>
            {isLoading ? (
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size='large'  color={COLORS.gray2}/>
                </View>) : error ? (
                <Text>Something went wrong</Text>
                ) : (
            <ScrollView>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <Image source={icons.backarrow}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/cart')}>
                    <Text style={styles.cartItems}>{cart?.length}</Text>
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
            <ImageSlider images={data.images} id={data.id}/>
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${data.price}</Text>
                <View style={styles.discountWrapper}>
                    <Text style={styles.discountText}>${data.discountPercentage} OFF</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAddPress}>
                    <Text style={styles.addToCartBtnText}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buyNowBtn]} onPress={() => router.push('/cart')}>
                    <Text style={styles.buyNowBtnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.detailText}>Details</Text>
                <Text style={[styles.descriptionText, styles.detailText]}>{data.description}</Text>
            </View>
            </ScrollView>
            )}
        </SafeAreaView>)
}

export default ProductDetails;