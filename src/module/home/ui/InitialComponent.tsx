import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Text, StyleSheet, View } from "react-native";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import { useInitial } from "../store/initial";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";

const InitialComponent = () => {
    const { define } = useInitial();

    return (
        <GestureHandlerRootView>
            <ScrollView
                contentContainerStyle={{
                    padding: 20,
                    gap: 20,
                }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.WHITE,
                        padding: PADDING.DEFAULT,
                        borderRadius: BORDER_RADIUS.DEFAULT,
                        gap: 20
                    }}
                >
                    <Text style={styles.title}>
                        Мобильдік қосымша бойынша нұсқаулық (ИКТ)
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Қосымша мазмұны:
                    </Text>
                    <Text style={styles.text}>
                        1. Лекция – теориялық материалдар.{"\n"}
                        2. Практика – тапсырмаларды орындау.{"\n"}
                        3. Лабораториялық жұмыс – тәжірибелік тапсырмалар.{"\n"}
                        4. Тест – білімді тексеру.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Нұсқаулық:
                    </Text>
                    <Text style={styles.text}>
                        1. Қосымшаны ашқан соң, "Тақырыпты өту" батырмасын басыңыз.{"\n"}
                        2. Батырманы басқаннан кейін қосымша келесі 4 бөлімді кезекпен көрсетеді:{"\n"}
                        Алдымен лекцияны оқыңыз.{"\n"}
                        Лекция аяқталған соң автоматты түрде практикаға өтесіз. Практика тапсырмаларын орындаңыз.{"\n"}
                        Практика аяқталғаннан кейін автоматты түрде лабораториялық жұмысқа өтесіз.{"\n"}
                        Соңында тестті орындап, өз нәтижелеріңізді көресіз.{"\n"}
                        3. Барлық материалдардан өткеннен кейін нәтижелеріңіз автоматты түрде сақталады.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Нәтижелерді бақылау:
                    </Text>
                    <Text style={styles.text}>
                        Қосымшада "Нәтижелерді көру" батырмасы бар. Осы батырманы басып, өзіңіздің қандай деңгейде екеніңізді бақылап, тест нәтижелерін көре аласыз.{"\n"}
                        Бұл бөлімде сізге қанша балл жинағаныңыз және қай тақырыптарды жақсарту керектігі көрсетіледі.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Маңызды:
                    </Text>
                    <Text style={styles.text}>
                        Әр бөлім тек бір рет қана өтіледі.{"\n"}
                        Егер материалдарды қайта өту қажет болса, нәтижелерді "Нәтижелерді жою" батырмасын басып өшіріңіз.
                    </Text>

                    <Text style={styles.text}>
                        Сәттілік!{"\n"}
                        Бұл қосымша сіздің АКТ пәні бойынша білім деңгейіңізді арттыруға көмектеседі!
                    </Text>
                </View>

                <ButtonComponent
                    title="Растау"
                    onClick={() => define(true)}
                />
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: FONT_SIZE.LARGE,
        fontWeight: "bold"
    },
    sectionTitle: {
        fontSize: FONT_SIZE.DEFAULT,
        fontWeight: "600"
    },
    text: {
        fontSize: FONT_SIZE.SMALL,
        lineHeight: 20
    }
});

export default InitialComponent;