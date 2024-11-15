import { Button, Dimensions, Text, View } from "react-native";
import Pdf from "react-native-pdf";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ROUTES } from "../../../core/route/routes";

const DetailsScreen = ({ navigation, route }: { navigation: StackNavigationProp<any, any>, route: RouteProp<any, typeof ROUTES.DETAILS> }) => {
    // DEFINE
    const { itemId } = route.params || {};

    return (
        <View style={{ flex: 1 }}>
            <Text>Details Screen {itemId}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.pop()}
            />
            <Pdf
                source={{ uri: "bundle-assets://pdf/sample.pdf" }}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            />
        </View>
    );
}

export default DetailsScreen;