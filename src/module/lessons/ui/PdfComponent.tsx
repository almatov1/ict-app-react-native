import { Dimensions, Image, Linking, ScrollView, View } from "react-native";
import { BORDER_RADIUS, COLORS } from "../../../core/config/template";
import { useEffect, useRef, useState } from "react";
import RNFS from 'react-native-fs';
import { convert } from "react-native-pdf-to-image";
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import Zoom from 'react-native-zoom-reanimated'
import FileViewer from "react-native-file-viewer";

const PdfComponent = ({ stage, currentLesson }: { stage: number, currentLesson: number }) => {
    // DEFINE
    const [images, setImages] = useState<string[]>([]);
    const [file, setFile] = useState<string | null>(null);
    useEffect(() => {
        const pdfDirection = stage === 0 ? 'lec' : stage === 1 ? 'prac' : 'lab';
        const fileName = `${pdfDirection}-${currentLesson + 1}.pdf`;
        const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
        const sourcePath = `pdf/${pdfDirection}/${fileName}`;

        RNFS.copyFileAssets(sourcePath, destPath)
            .then(async () => {
                setFile(destPath);
                const result = await convert(`file://${destPath}`);
                if (result.outputFiles) setImages(result.outputFiles);
            })
            .catch(error => {
                console.error('Ошибка при копировании файла: ', error);
            });
    }, [stage, currentLesson]);
    const screenWidth = Dimensions.get('window').width;
    const scrollViewRef = useRef<ScrollView>(null);
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false });
        }
    }, [stage, currentLesson]);
    const openFile = async () => { if (file) FileViewer.open(file) };

    if (!images) return null;
    return (
        <GestureHandlerRootView>
            <Pressable
                onPress={openFile}
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    zIndex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: 50,
                    padding: 5,
                }}
            >
                <Image
                    source={require('../../../core/assets/img/download.png')}
                    style={{
                        width: 32,
                        height: 32,
                        backgroundColor: COLORS.WHITE,
                        borderRadius: 50
                    }}
                />
            </Pressable>

            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                    gap: 20
                }}
            >
                {images.length > 0 ? (
                    images.map((imageUri, index) => (
                        <Zoom
                            key={index}
                            doubleTapConfig={{
                                defaultScale: 2
                            }}
                        >
                            <Image
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