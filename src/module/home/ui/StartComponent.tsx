import { ROUTES } from "../../../core/route/routes";
import ButtonComponent from "../../shared/ui/ButtonComponent";

const StartComponent = ({ navigation }: { navigation: any }) => {
    return (
        <ButtonComponent
            title="Тақырыпты өту"
            onClick={() => navigation.navigate(ROUTES.LESSONS)}
        />
    );
}

export default StartComponent;