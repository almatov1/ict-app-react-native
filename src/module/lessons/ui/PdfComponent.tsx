import { Dimensions, Image, ScrollView } from "react-native";
import { BORDER_RADIUS } from "../../../core/config/template";
import { useEffect, useState } from "react";
import RNFS from 'react-native-fs';
import { convert } from "react-native-pdf-to-image";

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
        <ScrollView
            contentContainerStyle={{
                gap: 20
            }}
        >
            {images.length > 0 ? (
                images.map((imageUri, index) => (
                    <Image
                        key={index}
                        source={{ uri: `file://${imageUri}` }}
                        style={{
                            borderRadius: BORDER_RADIUS.DEFAULT,
                            width: screenWidth - 40,
                            height: (screenWidth - 40) * 1.414,
                        }}
                    />
                ))
            ) : null}
        </ScrollView>
    );
}

export default PdfComponent;