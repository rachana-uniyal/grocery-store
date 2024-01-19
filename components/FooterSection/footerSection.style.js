import { StyleSheet } from "react-native"
import { FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 89,
      borderRadius:30,
      backgroundColor: 'white',
      shadowColor: 'rgba(163, 165, 184, 0.25)',
        shadowOffset: {
        width: -3,
        height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 10,

    },
    iconButton: {
      alignItems: 'center',
      justifyContent:'center',
      height:24,
      width:24
    },
    iconText: {
      fontSize: SIZES.label,
      color: '#8891A5',
      marginTop: 4,
    },
    icon:{
        maxHeight:24,
        maxWidth:24
    },
    footerButton:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles;