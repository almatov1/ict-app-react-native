import { StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS, COLORS, FONT_SIZE } from "../../../core/config/template";

const ContentComponent = () => {
    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 10
        }}>
            <View style={styles.block}><Text style={styles.text}>15 дәріс</Text></View>
            <View style={styles.block}><Text style={styles.text}>15 практикалық жұмыс</Text></View>
            <View style={styles.block}><Text style={styles.text}>15 зертханалық жұмыс</Text></View>
            <View style={styles.block}><Text style={styles.text}>15 тест тапсырмасы</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        paddingHorizontal: 10,
        width: '48%',
        height: 100,
        backgroundColor: COLORS.WHITE,
        borderRadius: BORDER_RADIUS.DEFAULT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: FONT_SIZE.DEFAULT,
        textAlign: 'center'
    }
});

export default ContentComponent;