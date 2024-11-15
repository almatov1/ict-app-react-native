import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { GLOBAL } from "../../../core/config/shared";
import HomeComponent from "../ui/HomeComponent";

const HomeScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: GLOBAL.NAME,
        });
    }, [navigation]);

    return <HomeComponent navigation={navigation} />;
}

export default HomeScreen;