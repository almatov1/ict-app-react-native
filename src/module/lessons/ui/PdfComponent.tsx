import { Dimensions, Image, ScrollView } from "react-native";
import { BORDER_RADIUS } from "../../../core/config/template";
import { useEffect, useState } from "react";
import RNFS from 'react-native-fs';
import { convert } from "react-native-pdf-to-image";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Zoom from 'react-native-zoom-reanimated'

const PdfComponent = ({ stage, currentLesson }: { stage: number, currentLesson: number }) => {
    // DEFINE
    const [images, setImages] = useState<string[]>([]);
    useEffect(() => {
        const pdfDirection = stage === 0 ? 'lec' : stage === 1 ? 'prac' : 'lab';
        const fileName = `${pdfDirection}-${currentLesson + 1}.pdf`;

        const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
        const sourcePath = `pdf/${pdfDirection}/${fileName}`;

        RNFS.copyFileAssets(sourcePath, destPath)
            .then(async () => {
                const result = await convert(`file://${destPath}`);
                if (result.outputFiles) setImages(result.outputFiles);
            })
            .catch(error => {
                console.error('Ошибка при копировании файла: ', error);
            });
    }, [stage, currentLesson]);
    const screenWidth = Dimensions.get('window').width;

    if (!images) return null;
    return (
        <GestureHandlerRootView>
            <ScrollView
                contentContainerStyle={{
                    gap: 20
                }}
            >
                {images.length > 0 ? (
                    images.map((imageUri, index) => (
                        <Zoom
                            doubleTapConfig={{
                                defaultScale: 2
                            }}
                        >
                            <Image
                                key={index}
                                source={{ uri: `file://${imageUri}` }}
                                style={{
                                    width: screenWidth - 20,
                                    height: (screenWidth - 20) * 1.414,
                                    borderRadius: BORDER_RADIUS.DEFAULT
                                }}
                                resizeMode='contain'
                            />
                        </Zoom>
                    ))
                ) : null}
            </ScrollView>
        </GestureHandlerRootView>
    );
}

export default PdfComponent;