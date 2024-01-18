import { SafeAreaView, View, ScrollView } from "react-native";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import OfferSection from "../components/OfferSection/OfferSection";
import RecommendedSection from "../components/RecommendedSection/Recommended/RecommendedSection"
import FooterSection from "../components/FooterSection/FooterSection";
import { FavoriteProvider } from "../context/FavoriteContext";

 

const Home = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <FavoriteProvider>
                    <View>
                        <HeaderSection/>
                        <OfferSection/>
                        <RecommendedSection/>
                        <FooterSection/>
                    </View>
            </FavoriteProvider>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;