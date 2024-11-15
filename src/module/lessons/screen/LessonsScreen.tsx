import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { useProgress } from "../store/progress";
import LessonsComponent from "../ui/LessonsComponent";
import { LESSONS } from "../../../core/config/shared";

const LessonsScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    const { progress } = useProgress();
    const currentLesson = progress.filter(item => item.finished).length;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: currentLesson > 14 ? 'Аяқталды' : LESSONS[currentLesson],
        });
    }, [navigation]);

    return <LessonsComponent navigation={navigation} />;
}

export default LessonsScreen;