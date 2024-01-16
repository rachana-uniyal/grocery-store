import {View, Text, TextInput, Image,TouchableOpacity} from "react-native";
import styles from "./headerSection.style";
import { icons, COLORS } from "../../constants"

const HeaderSection = ()=>{

    return(
        <View style={styles.container} >
            <View style={styles.header}>
              <Text style={styles.headerText}>Hey, Rachana</Text>
              <View style={styles.cartWrapper}>
              <Image
                    source={icons.cartItems}
                    resizemode='contain'
                    style={styles.cartItems}  
                />
                <Image
                    source={icons.bag}
                    resizemode='contain'
                    style={styles.cart}
                />
              </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconWrapper}>
                <TouchableOpacity>
                    <Image 
                        source={icons.search}
                        resizemode='contain'
                        style={styles.searchIcon}
                    />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search Products or store'
                    placeholderTextColor={COLORS.gray2}
                />
            </View>
            <View style={styles.deliveryContainer}>
                <View style={styles.deliveryInfo}>
                    <Text style={styles.titleText}>DELIVERY TO</Text>
                    <TouchableOpacity>
                    <Text style={styles.mainText}>Green Way 3000, Sylhet <Image style={styles.arrowIcon} source={icons.arrow}/></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.deliveryTime}>
                    <Text style={styles.titleText}>WITHIN</Text>
                    <TouchableOpacity>
                    <Text style={styles.mainText}>1 Hour <Image style={styles.arrowIcon} source={icons.arrow}/></Text>
                    </TouchableOpacity>
                </View>
    </View>


        </View>
    )
}

export default HeaderSection;