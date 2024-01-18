import {View, Image} from "react-native"
import styles from "./offerSection.style";
import { icons } from "../../constants";

const OfferSection = () => {
    return(
        <View style={styles.container}>
            <Image source={icons.banner} style={styles.bannerImg}/>
        </View>
    )
}

export default OfferSection;