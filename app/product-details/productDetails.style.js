import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    titleContainer:{
        height:126,
        marginLeft: 20,
    },
    titleText:{
        fontSize: 50
    },
    ratingReviewContainer:{
        display:'flex',
        flexDirection:'row',
        marginLeft:20
    },
    priceWrapper:{
        height:24,
        marginLeft:20,
        marginTop:20,
        display:'flex',
        flexDirection:'row'
    },
    priceText:{
        fontSize: SIZES.body2,
        color: COLORS.primary1,
        fontFamily: FONT.bold,
        marginRight:15
    },
    discountText:{
        fontSize:SIZES.small,
        color:'white',
        fontFamily: FONT.regular,
    },
    discountWrapper:{
        backgroundColor: COLORS.primary1,
        borderRadius:12,
        width:84,
        height:24,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonsContainer:{
        height:56,
        display:'flex',
        flexDirection:'row',
        marginTop:20
    },
    button:{
        marginLeft:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:56,
        width:143,
        borderRadius:20,
        borderColor: COLORS.primary1,
        borderWidth:1
    },
    addToCartBtnText:{
        color:COLORS.primary1
    },
    buyNowBtnText:{
        color:'white'
    },

    buyNowBtn:{
        backgroundColor:COLORS.primary1
    },
    descriptionContainer:{
        margin:20,
        marginTop:30,
        display:'flex',
        height:102,
    },
    detailText:{
        fontSize:SIZES.body1,
        fontFamily: FONT.regular
    },
    descriptionText:{
        color:COLORS.gray2,    
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    bagIcon:{
        marginRight:10
    },
    cartItems:{
        position: "relative",
        height:24,
        width: 24,
        borderRadius:12,
        color:'white',
        fontFamily: FONT.bold,
        top:9,
        left:4,
        zIndex:1,
        textAlign:'center',
        backgroundColor:COLORS.secondary1
    },
    activityIndicatorWrapper:{
        margin:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  
})

export default styles;