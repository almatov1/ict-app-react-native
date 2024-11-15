import { ScrollView, View } from "react-native";
import StartComponent from "./StartComponent";
import ProgressComponent from "./ProgressComponent";
import ContentComponent from "./ContentComponent";
import ResetComponent from "./ResetComponent";
import LogotypeComponent from "./LogotypeComponent";
import DividerComponent from "../../shared/ui/DividerComponent";
import ResultButtonComponent from "./ResultButtonComponent";

const HomeComponent = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView
            contentContainerStyle={{
                padding: 20,
                gap: 20
            }}
        >
            <LogotypeComponent />
            <ProgressComponent />
            <DividerComponent />
            <ContentComponent />
            <StartComponent navigation={navigation} />
            <ResultButtonComponent navigation={navigation} />
            <ResetComponent />
        </ScrollView>
    )
}

export default HomeComponent;