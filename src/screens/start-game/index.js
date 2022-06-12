import { Button, TextInput, } from "react-native";
import { Card, Header, Input, numberContainer } from "../../components/index"
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import react, { useState } from "react";

import colors from "../../constants/colors"
import { styles } from "./styles"

const StartGame = ()=> {

    const [SelectedNumber, setSelectedNumber] = useState("");
    const [confirmed, setconfirmed] = useState(false);
    const [enteredValue, setEnteredValue] = useState("");

    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue);
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99)return;
        setconfirmed(true);
        setSelectedNumber(choseNumber);
        setEnteredValue("");
    }

    const handlerInputNumber = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    };


    let confirmedOutput;
        if (confirmed) {
            confirmedOutput = (
                <Card style={styles.summaryContainer}>
                    <Text>Tu seleccion: </Text>
                    <numberContainer>{SelectedNumber}</numberContainer>
                    <View style={styles.buttonContainer}>
                    <button title="Empezar Juego"/>
                    </View>
                </Card>

            )
        }
    return (
        <TouchableWithoutFeedback style={styles.container}
        onPress={() => {
            Keyboard.dismiss();
        }}>
    
        <View style={styles.container}>
            <Header title="Bienvenidos"/>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Elija el numero</Text>
                <Input
                placeholder="Ingresa un numero"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={2}
                blurOnSubmit={true}
                onChangeText={handlerInputNumber}
                value={enteredValue}
                />
                <View  style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button title="limpiar" onPress={() => null} color={colors.secondary}/>
                </View>

                <View style={styles.button}>
                    <Button title="confirmar" onPress={() => handlerConfirmInput()} color={colors.primary}/>
                </View>

                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame