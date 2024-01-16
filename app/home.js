import { SafeAreaView, View, Text } from "react-native";
import HeaderSection from "../components/HeaderSection/HeaderSection";

const Home = () =>{
    return(
        <SafeAreaView>
            <View>
                 <HeaderSection/>
                {/*<OfferSection/>
                <RecommendedSection/> */}
            </View>
        </SafeAreaView>
    )
}

export default Home;