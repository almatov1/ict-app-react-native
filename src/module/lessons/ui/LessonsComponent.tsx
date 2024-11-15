import { Dimensions, ScrollView, Text, View } from "react-native";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import { useProgress } from "../store/progress";
import { useState } from "react";
import Pdf from "react-native-pdf";
import { BORDER_RADIUS, FONT_SIZE } from "../../../core/config/template";

const LessonsComponent = ({ navigation }: { navigation: any }) => {
    // define
    const { define, progress } = useProgress();
    const currentLesson = progress.findIndex(item => !item.finished);
    const [stage, setStage] = useState(0);

    // content
    const renderContent = () => {
        const pdfDirection = stage === 0 ? 'lec' : stage === 1 ? 'prac' : 'lab';
        switch (stage) {
            case 3:
                return <Text>test</Text>;
            default:
                return <Pdf
                    source={{
                        uri: `bundle-assets://pdf/${pdfDirection}/${pdfDirection}-${currentLesson + 1}.pdf`
                    }}
                    style={{
                        flex: 1,
                        height: Dimensions.get('window').height,
                        borderRadius: BORDER_RADIUS.DEFAULT
                    }}
                />;
        }
    };

    if (currentLesson === -1) return (
        <Text
            style={{
                padding: 20,
                fontSize: FONT_SIZE.DEFAULT
            }}
        >
            Тақырыптар аяқталды
        </Text>
    );
    return (
        <View
            style={{
                flex: 1,
                padding: 20,
                gap: 20
            }}
        >
            {renderContent()}
            <ButtonComponent
                title={stage !== 3 ? "Жалғастыру" : "Аяқтау"}
                onClick={() => {
                    if (stage === 3) {
                        define(currentLesson, { finished: true, test: 5 });
                        navigation.pop();
                        return;
                    }

                    setStage(stage + 1);
                }}
            />
        </View>
    );
}

export default LessonsComponent;