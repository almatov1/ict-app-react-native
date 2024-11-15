import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import ButtonComponent from "../../shared/ui/ButtonComponent";
import { BORDER_RADIUS, COLORS, FONT_SIZE, PADDING } from "../../../core/config/template";
import CheckBox from "@react-native-community/checkbox";
import { QUIZ } from "../../../core/config/quiz";

const TestComponent = ({ currentLesson, onFinish }: { currentLesson: number, onFinish: (test: number) => void }) => {
    const currentQuiz = QUIZ[currentLesson];
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
        new Array(currentQuiz.length).fill("")
    );
    const handleOptionSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };
    const calculateScore = () => {
        let correctAnswers = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === currentQuiz[index].correct_option) {
                correctAnswers++;
            }
        });
        onFinish(correctAnswers);
    };

    return (
        <ScrollView
            contentContainerStyle={{
                gap: 20,
                padding: 20
            }}
        >
            <View
                style={{
                    gap: 20,
                    backgroundColor: COLORS.WHITE,
                    padding: PADDING.DEFAULT,
                    borderRadius: BORDER_RADIUS.DEFAULT
                }}
            >
                {currentQuiz.map((questionData, index) => (
                    <View key={index}>
                        <Text style={{ marginBottom: 5, fontSize: FONT_SIZE.DEFAULT }}>
                            {index + 1}. {questionData.question}
                        </Text>
                        {questionData.options.map((option, optionIndex) => (
                            <Pressable key={optionIndex} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }} onPress={() => handleOptionSelect(index, option)}>
                                <CheckBox
                                    value={selectedAnswers[index] === option}
                                    tintColors={{ true: COLORS.BLUE, false: '#d4d4d4' }}
                                    disabled={true}
                                />
                                <Text style={{ fontSize: FONT_SIZE.SMALL, width: 270 }}>{option}</Text>
                            </Pressable>
                        ))}
                    </View>
                ))}
            </View>
            <ButtonComponent
                title="Аяқтау"
                onClick={calculateScore}
            />
        </ScrollView>
    );
};

export default TestComponent;