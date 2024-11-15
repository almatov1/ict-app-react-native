import { Image, View } from "react-native";

const LogotypeComponent = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('../../../core/assets/img/icon.png')}
            />
        </View>
    );
}

export default LogotypeComponent;