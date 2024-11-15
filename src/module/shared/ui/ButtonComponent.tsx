import { Text, TouchableHighlight } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";

const ButtonComponent = ({ title, onClick, backgroundColor }: { title: string, onClick: () => void, backgroundColor?: string }) => {
    return (
        <TouchableHighlight
            onPress={onClick}
            style={{
                backgroundColor: backgroundColor ?? COLORS.BLUE,
                padding: PADDING.DEFAULT,
                borderRadius: BORDER_RADIUS.DEFAULT
            }}
            underlayColor={COLORS.BLUE}
        >
            <Text
                style={{
                    color: COLORS.WHITE,
                    textAlign: 'center',
                    fontSize: FONT_SIZE.DEFAULT
                }}
            >
                {title}
            </Text>
        </TouchableHighlight>
    );
}

export default ButtonComponent;