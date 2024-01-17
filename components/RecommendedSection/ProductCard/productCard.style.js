import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 194,
        backgroundColor: COLORS.gray4,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 12,
        alignItems:'center',
    },
    productImg : {
        height: 68,
        width: 68,
        resizeMode: 'cover',
        marginTop: 20
    },
    heartIcon: {
        height: 13.35,
        width: 14.55,
        resizeMode: 'cover',
        left: -60,
        top: 20
    },
    productInfoContainer:{
        display:'flex',
        marginTop: 30,
        width: '90%'
    },
    priceWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    addToCart:{
        height:24,
        width:24,
        borderRadius:12,
        backgroundColor:COLORS.primary2,
        display:'flex',
        alignItems:'center'
    },
    addToCartText:{
        color:'white',
        fontSize: SIZES.h3, 
        marginTop: -3       
    },
    priceText:{
        fontSize: SIZES.body2,
        fontFamily: FONT.semiBold
    },
    titleText:{
        fontSize:SIZES.label,
        fontFamily: FONT.regular,
        color: COLORS.black3
    }



})

export default styles
