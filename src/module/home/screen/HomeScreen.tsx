import { Button, Text, View } from "react-native";
import { ROUTES } from "../../../core/route/routes";
import Video from "react-native-video";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCounter } from "../store/counter";

const HomeScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    const background = require('../../../core/assets/video/sample.mp4');
    const { count, inc } = useCounter();

    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate(ROUTES.DETAILS)}
            />
            <Text>{count}</Text>
            <Button
                title="Inc counter"
                onPress={inc}
            />
            <Video
                source={background}
                controls={true}
                paused={true}
                style={{ flex: 1 }}
            />
        </View>
    );
}

export default HomeScreen;