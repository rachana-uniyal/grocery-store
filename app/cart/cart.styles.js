import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
     backgroundColor:'white',
      flex: 1,
    },
   
    itemContainer: {
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: '#EBEBFB',
      margin:10
    },
    itemImage: {
      width: 25,
      height: 25,
      resizeMode: 'cover',
      marginLeft:20
    },
    
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      width: 40,
      height: 40,
      resizeMode:'contain',
      margin:8
    },

    titlePriceWrapper:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
      width:100,
    },
    textStyle: {
      fontSize:SIZES.body2,
      color:'#1E222B'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height:40,
        width:204,
        marginLeft:24,
        marginTop:45,
        marginBottom: 20
      },
      headerTitle: {
        fontFamily: FONT.regular,
        fontSize: SIZES.body1,
        marginLeft:20
      },
    totalSection: {
        height:266,
        backgroundColor: COLORS.gray4,
        borderRadius:30,
  
      },
    subSectionWrapper:{
        marginTop: 20,
        marginLeft:20,
        marginRight:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
      
    },
    subSectionText:{
        fontSize:SIZES.body2,
        color:COLORS.black3
    },
    priceText:{
        fontFamily: FONT.medium,
        fontSize:SIZES.body2,
    },
    totalText:{
        fontFamily: FONT.semiBold,
        fontSize:SIZES.body2,
    },
    checkoutButton: {
        height: 56,
        width:'95%',
        margin:10,
        marginTop:40,
        borderRadius: 20,
        backgroundColor: COLORS.primary1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      checkoutButtonText: {
        color: 'white',
        fontSize: SIZES.button1
      },
  
  });

export default styles;

  