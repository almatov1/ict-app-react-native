import { Text, View } from "react-native";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import { useProgress } from "../store/progress";
import { useState } from "react";
import { FONT_SIZE } from "../../../core/config/template";
import PdfComponent from "./PdfComponent";
import TestComponent from "./TestComponent";

const LessonsComponent = ({ navigation }: { navigation: any }) => {
    // define
    const { define, progress } = useProgress();
    const currentLesson = progress.findIndex(item => !item.finished);
    const [stage, setStage] = useState(0);
    const onFinish = (test: number) => {
        define(currentLesson, { finished: true, test });
        navigation.pop();
    }

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
    if (stage === 3) return <TestComponent currentLesson={currentLesson} onFinish={onFinish} />;
    return (
        <View
            style={{
                flex: 1,
                padding: 20,
                gap: 20
            }}
        >
            <PdfComponent stage={stage} currentLesson={currentLesson} />
            <ButtonComponent
                title={stage !== 3 ? "Жалғастыру" : "Аяқтау"}
                onClick={() => setStage(stage + 1)}
            />
        </View>
    );
}

export default LessonsComponent;