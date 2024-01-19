import React,{ useRef} from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { icons } from '../../constants';
import styles from './footerSection.style.js';


const FooterButton = ({ iconPath, label }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: -40, 
      friction: 5, 
      useNativeDriver: true, 
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0, 
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ translateY }],
  };

  return (
    <Animated.View style={[styles.footerButton, animatedStyle]}>
      <TouchableOpacity
        style={styles.iconButton}
        onPressIn={handlePressIn}   
        onPressOut={handlePressOut} 
      >
        <Image source={iconPath} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.iconText}>{label}</Text>
    </Animated.View>
  );
};



const FooterSection = () => {
  return (
    <View style={styles.footer}>
      <FooterButton iconPath={icons.home} label='Home'/>
      <FooterButton iconPath={icons.category} label='Categories'/>
      <FooterButton iconPath={icons.heart} label='Favourite'/>
      <FooterButton iconPath={icons.more} label='More'/>
    </View>
  );
};


export default FooterSection;