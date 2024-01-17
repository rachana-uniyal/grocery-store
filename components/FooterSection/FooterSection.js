import React,{ useState} from 'react';
import { View, Text, Image, TouchableOpacity,TouchableWithoutFeedback, Animated } from 'react-native';
import { icons } from '../../constants';
import styles from './footerSection.style.js';


const FooterButton = ({iconPath, label}) =>(
    <View style={styles.footerButton}>
        <TouchableOpacity style={styles.iconButton}>
            <Image source={iconPath} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.iconText}>{label}</Text>
    </View>
)


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