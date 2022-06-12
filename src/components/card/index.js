import { ProgressViewIOSComponent, View } from "react-native";

import React from "react";
import { styles } from "./styles"

const Card = ({ children, style }) => {
    return (
<View style={styles.container}>
        {children}
</View>
    )
};

export default Card;