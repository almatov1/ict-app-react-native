import { Pressable, Text } from "react-native";
import { COLORS, FONT_SIZE } from "../../../core/config/template";
import { ROUTES } from "../../../core/route/routes";

const ResultButtonComponent = ({ navigation }: { navigation: any }) => {
    return (
        <Pressable onPress={() => navigation.navigate(ROUTES.RESULT)}>
            <Text
                style={{
                    fontSize: FONT_SIZE.DEFAULT,
                    textAlign: 'center',
                    color: COLORS.BLUE,
                    textDecorationLine: 'underline'
                }}
            >
                Нәтижелерді көру
            </Text>
        </Pressable>
    );
}

export default ResultButtonComponent;