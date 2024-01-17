import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: COLORS.primary1
    },
    header:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.primary1,
        width: 339,
        marginTop: 52,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    } ,
    headerText: { 
        color: COLORS.gray4,
        fontSize: SIZES.h1,
        fontFamily: FONT.bold
    },
    cart:{
        height: 24,
        width: 24,
        top: -8
    },
    cartItems:{
        position: "relative",
        height:24,
        width: 24,
        top: 6,
        left:9,
        zIndex:1
    },
    cartWrapper:{
        display:'block',
    },

    searchInput:{
        flex:1,
        height:56,
        borderRadius: 28,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius:0,
        borderColor: COLORS.primary2,
        fontSize: SIZES.body2,
        backgroundColor: COLORS.primary2,
    },

    searchContainer:{
        margin:20,
        flexDirection: 'row',
        alignItems: 'center',    
    },

    searchIconWrapper:{
        backgroundColor: COLORS.primary2,
        height:56,
        borderTopLeftRadius:28,
        borderBottomLeftRadius:28,
        justifyContent: 'center',
        alignItems:'center'
    },

    searchIcon:{
        marginRight:15,
        height: 18,
        width:18,
        marginLeft:25
    },

    deliveryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: COLORS.primary1, 
      },
      deliveryInfo: {
        alignItems: 'flex-start',
      },
      deliveryTime: {
        alignItems: 'flex-end',
      },
      titleText: {
        fontSize: SIZES.small,
        color: 'white',
        marginBottom: 5,
        opacity: 0.5
      },
      mainText: {
        fontSize: SIZES.body2,
        color: 'white',
    },
    arrowIcon: {
        marginLeft: 30
    }



})

export default styles;