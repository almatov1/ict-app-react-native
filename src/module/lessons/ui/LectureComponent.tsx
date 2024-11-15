import { Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const LectureComponent = () => {
    return (
        <Pdf
            source={{ uri: `bundle-assets://pdf/sample.pdf` }}
            style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}
        />
    );
}

export default LectureComponent;