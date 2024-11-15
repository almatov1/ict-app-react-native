import { Button, Dimensions, Text, View } from "react-native";
import { ROUTES } from "../../../core/route/routes";
import Pdf from "react-native-pdf";
import { StackNavigationProp } from "@react-navigation/stack";

const DetailsScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Details Screen</Text>
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