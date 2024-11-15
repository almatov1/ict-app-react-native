import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../module/home/screen/HomeScreen";
import { ROUTES } from "./routes";
import { COLORS } from '../config/template';
import LessonsScreen from '../../module/lessons/screen/LessonsScreen';
import ResultScreen from '../../module/result/screen/ResultScreen';

const Stack = createNativeStackNavigator();
const RouteComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.HOME}
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.BLUE },
                    headerTintColor: COLORS.WHITE
                }}
            >
                <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTES.LESSONS} component={LessonsScreen} />
                <Stack.Screen name={ROUTES.RESULT} component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteComponent;