import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../module/home/screen/HomeScreen";
import DetailsScreen from "../../module/details/screen/DetailsScreen";
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();
const RouteComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.HOME}>
                <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;