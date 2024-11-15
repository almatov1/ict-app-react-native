import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";
import { useProgress } from "../../lessons/store/progress";

const ProgressComponent = () => {
    const { progress } = useProgress();
    const totalItems = progress.length;
    const finishedItems = progress.filter(item => item.finished).length;
    const finishedPercentage = ((finishedItems / totalItems) * 100).toFixed(1);

    return (
        <View
            style={{
                backgroundColor: COLORS.WHITE,
                padding: PADDING.DEFAULT,
                borderRadius: BORDER_RADIUS.DEFAULT,
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'
            }}
        >
            <View style={{
                borderWidth: 2,
                borderColor: COLORS.BLUE,
                borderRadius: 50,
                padding: 10
            }}>
                <Text style={{ fontSize: FONT_SIZE.LARGE }}>
                    {finishedPercentage.toString()}%
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>Барлық тақырып саны: {totalItems}</Text>
                <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>Өтілген тақырып саны: {finishedItems}</Text>
            </View>
        </View >
    );
}

export default ProgressComponent;