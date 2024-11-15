import { View } from "react-native";
import { COLORS } from "../../../core/config/template";

const DividerComponent = () => {
    return (
        <View style={{
            height: 1,
            backgroundColor: COLORS.BLUE
        }}></View>
    );
}

export default DividerComponent;