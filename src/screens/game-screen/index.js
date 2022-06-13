import { Card, numberContainer } from "../../components";
import { Text, View, } from "react-native"
import react, { useState } from "react";

import { Button } from "react-native";
import colors from "../../constants/colors";
import { styles } from "./styles"

const GameScreen = ({ userOptions }) => {
    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil[min];
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if(rndNum == exclude) {
            return generateRandomBetween(min, max, exclude);
        }
        return rndNum;

    };
    const [CurrentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions));
    return (
        <View style={styles.container}>
            <Text>La suposicion del oponente: </Text>
            <numberContainer>{CurrentGuess}</numberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => {}} color={colors.primary} />
                <Button title="Mayor" onPress={() => {}} color={colors.primary} />
            </Card>
        </View>
    )
}
export default GameScreen;
