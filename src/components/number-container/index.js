import { Text, View } from "react-native"

import { numberContainer } from "..";
import react from "react"
import { styles } from "./styles"

const NumberContainer = ({ children, style }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
};

export default NumberContainer;