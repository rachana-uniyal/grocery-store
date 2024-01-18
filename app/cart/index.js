import React, {useRef, useEffect} from "react";
import {View, Text,TouchableOpacity, FlatList, Image, Animated} from 'react-native'
import { icons } from '../../constants'
import styles from './cart.styles';
import { useCart } from '../../context/CartContext';

const ShoppingCart = () =>{

  const { cart ,increaseQuantity, decreaseQuantity,removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 2.00;
  const total = subtotal + deliveryCharge;

  const animations = useRef(new Map()).current;

  useEffect(() => {
    let changesMade = false;
    cart.forEach(item => {
      if (!animations.has(item.id)) {
        animations.set(item.id, new Animated.Value(1));
        changesMade = true;
      }
    });
    animations.forEach((_, id) => {
      if (!cart.some(item => item.id === id)) {
        animations.delete(id);
        changesMade = true;
      }
    });
    if (changesMade) {
      animations.set(new Map(animations));
    }
  }, [cart]);



 const handleDecreaseQuantity = (id, quantity) =>{
      if(quantity == 1){
        Animated.timing(animations.get(id), {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start(() => {
          removeFromCart(id);
        });
      }
      else{
        decreaseQuantity(id)
      }
    }


const renderItem = ({ item }) => {
  const animatedValue = animations.get(item.id) || new Animated.Value(1);

    const animatedStyle = {
      opacity: animatedValue,
      height: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 42] 
      })
    }
    return(
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
          <View style={styles.titlePriceWrapper}>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>${item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={()=>handleDecreaseQuantity(item.id, item.quantity)}>
              <Image source={icons.minus}/>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={()=>increaseQuantity(item.id)}>
              <Image source={icons.plus}/>
            </TouchableOpacity>
          </View>
        </View>
    </Animated.View>
  )}


      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={icons.backarrow}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Shopping Cart ({cart?.length})</Text>
          </View>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.totalSection}>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Subtotal</Text>
              <Text style={styles.priceText}>${subtotal}</Text>
            </View>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Delivery</Text>
              <Text style={styles.priceText}>${deliveryCharge}</Text>
            </View>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Total</Text>
              <Text style={styles.totalText}>${total}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

export default ShoppingCart;