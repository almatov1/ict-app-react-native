import { Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { BORDER_RADIUS } from "../../../core/config/template";

const PdfComponent = ({ stage, currentLesson }: { stage: number, currentLesson: number }) => {
    // DEFINE
    const pdfDirection = stage === 0 ? 'lec' : stage === 1 ? 'prac' : 'lab';

    return (
        <Pdf
            source={{
                uri: `bundle-assets://pdf/${pdfDirection}/${pdfDirection}-${currentLesson + 1}.pdf`
            }}
            style={{
                flex: 1,
                height: Dimensions.get('window').height,
                borderRadius: BORDER_RADIUS.DEFAULT
            }}
        />
    );
}

export default PdfComponent;