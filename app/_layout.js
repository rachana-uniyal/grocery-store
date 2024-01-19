import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { FavoriteProvider } from "../context/FavoriteContext";
import { CartProvider } from '../context/CartContext';

export default function Layout() {
  
  const [fontsLoaded] = useFonts({
    ManropeRegular: require("../assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    ManropeSemiBold: require("../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
  })

  if(!fontsLoaded){
    return null;
  }

  return (
          <FavoriteProvider>
            <CartProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="home"/>   
            </Stack>
            </CartProvider>
          </FavoriteProvider>
          
        )
} 
