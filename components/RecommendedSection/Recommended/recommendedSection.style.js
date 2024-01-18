import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:5,
        backgroundColor:'white'
    },
    recommendedText:{
        fontFamily: FONT.regular,
        fontSize: SIZES.h1
    },
    productCardsContainer:{
        display: 'flex',
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
    },
    activityIndicatorWrapper:{
        margin:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;