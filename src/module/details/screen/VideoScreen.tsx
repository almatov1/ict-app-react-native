import { Button, Text, View } from "react-native";
import { ROUTES } from "../../../core/route/routes";
import Video from "react-native-video";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";

const VideoScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'This is home page',
        });
    }, [navigation]);
    const background = require('../../../core/assets/video/sample.mp4');

    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate(ROUTES.DETAILS, { itemId: 42 })}
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

export default VideoScreen;