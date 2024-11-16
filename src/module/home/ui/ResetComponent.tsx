import { Alert, Pressable, Text } from "react-native";
import { COLORS, FONT_SIZE } from "../../../core/config/template";
import { useProgress } from "../../lessons/store/progress";
import { useInitial } from "../store/initial";

const ResetComponent = () => {
    //define
    const { reset } = useProgress();
    const { define } = useInitial();

    // alert
    const showAlert = () => {
        Alert.alert(
            "Ескерту",
            "Сіз нәтижелерді жоюды құптайсыз ба?",
            [
                { text: "Жоқ" },
                {
                    text: "Иә", onPress: () => {
                        reset();
                        define(false);
                    }
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <Pressable onPress={showAlert}>
            <Text
                style={{
                    fontSize: FONT_SIZE.DEFAULT,
                    color: COLORS.RED,
                    textAlign: 'center',
                    textDecorationLine: 'underline'
                }}
            >
                Нәтижелерді жою
            </Text>
        </Pressable>
    );
}

export default ResetComponent;