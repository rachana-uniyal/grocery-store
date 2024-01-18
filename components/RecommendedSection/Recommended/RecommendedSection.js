import React from "react";
import { View, Text, ActivityIndicator, } from "react-native";
import { useRouter } from "expo-router";
import styles from "./recommendedSection.style";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../../hook/useFetch";
import { COLORS } from "../../../constants";

const RecommendedSection = React.memo(() =>{
    const router = useRouter()
    const { data, isLoading, error } = useFetch('', null);
    
    return(
            <View style={styles.container}>
                <Text style={styles.recommendedText}>Recommended</Text>
                <View style={styles.productCardsContainer}>
                    {isLoading ? (
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator size='large'  color={COLORS.gray2}/>
                        </View>) : error ? (
                        <Text>Something went wrong</Text>
                        ) : (
                        data?.products?.map((product) => (
                            <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            thumbnail={product.thumbnail}
                            price={product.price}  
                            handleNavigate={() => router.push(`/product-details/${product.id}`)}
                            />
                        ))
                    )}
                </View>
            </View>
    )
})

export default RecommendedSection;