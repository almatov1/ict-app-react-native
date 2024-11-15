import { FlatList, ScrollView, View } from "react-native";
import { useProgress } from "../../lessons/store/progress";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";
import { Text } from "@react-navigation/elements";
import { LESSONS } from "../../../core/config/shared";
import { QUIZ } from "../../../core/config/quiz";

const ResultComponent = () => {
    const { progress } = useProgress();

    return (
        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >
            <FlatList
                data={progress}
                renderItem={({ item, index }) => (
                    <View style={{
                        backgroundColor: COLORS.WHITE,
                        padding: PADDING.DEFAULT,
                        borderRadius: BORDER_RADIUS.DEFAULT,
                        marginBottom: index === progress.length - 1 ? 0 : 20,
                        gap: 5
                    }}>
                        <Text style={{ fontSize: FONT_SIZE.DEFAULT }}>
                            {LESSONS[index]}
                        </Text>
                        {
                            item.finished
                                ? <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: FONT_SIZE.SMALL,
                                            color: COLORS.BLUE
                                        }}
                                    >
                                        Тақырып өтілді
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: FONT_SIZE.SMALL,
                                            color: COLORS.BLUE
                                        }}
                                    >
                                        Тест нәтижесі - {item.test}/{QUIZ[index].length}
                                    </Text>
                                </View>
                                : <Text
                                    style={{
                                        fontSize: FONT_SIZE.SMALL,
                                        color: COLORS.RED
                                    }}
                                >
                                    Тақырып өтілмеді
                                </Text>
                        }
                    </View>
                )}
            />
        </View>
    )
}

export default ResultComponent;