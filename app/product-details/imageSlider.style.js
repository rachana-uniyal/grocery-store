import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = (width) =>StyleSheet.create({
    
    ImgSliderContainer:{
        marginTop:10
    },
   
    heartContainer:{
        height:58,
        width:58,
        borderRadius:20,
        backgroundColor:'white',
        position:'absolute',
        zIndex:1,
        right:30,
        top:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    imageWrapper:{
        width: width,
        height: 207,
        backgroundColor: COLORS.gray4,
        position:'relative', 
        alignItems:'center',
        justifyContent:'center'
        
    },
    image:{
        height: '100%',
        width:'100%',
        resizeMode:'center'
    }
})

export default styles;