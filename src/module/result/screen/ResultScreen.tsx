import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import ResultComponent from "../ui/ResultComponent";

const ResultScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    // define
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Нәтижелер",
        });
    }, [navigation]);

    return <ResultComponent />;
}

export default ResultScreen;